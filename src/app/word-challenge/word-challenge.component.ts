import { Component, OnInit, OnDestroy } from "@angular/core";
import { DictionaryService } from "../dictionary.service";
import { SettingsService } from "../settings.service";
import { IWord, IChallengeState } from "src/model/models";
import { ANSWER_KEYS, NOTIFICATIONS } from "./../../constants";

@Component({
  selector: "app-word-challenge",
  templateUrl: "./word-challenge.component.html",
  styleUrls: ["./word-challenge.component.css"]
})
export class WordChallengeComponent implements OnInit, OnDestroy {
  static initalState: IChallengeState = {
    response: {},
    answerStatus: {},
    timeCount: 0,
    isChallengeVisible: false,
    isResultVisible: false,
    challengeResult: "",
    timer: 0,
    notification: NOTIFICATIONS.EMPTY,
    finalResult: null
  };

  state: IChallengeState;

  constructor(
    private dictionary: DictionaryService,
    private settingsService: SettingsService
  ) {
    this.state = WordChallengeComponent.initalState;
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.stopTimer();
  }

  startTimer() {
    this.state.timer = setInterval(() => {
      // +1 to avoid showing 0
      if (this.state.timeCount + 1 === this.settingsService.settings.time) {
        this.stopTimer();
        this.state.challengeResult = "test failed";
      } else {
        this.state.timeCount += 1;
      }
    }, 1000);
  }

  stopTimer() {
    console.error("stopping");
    if (this.state.timer) {
      clearInterval(this.state.timer);
    }
  }

  toggleVisibility() {
    this.state.isChallengeVisible ? this.stop() : this.start();
  }

  start() {
    this.startTimer();
    this.state.isChallengeVisible = true;
  }

  stop() {
    this.state.isChallengeVisible = false;
    this.stopTimer();
  }

  getChallengeWords(): IWord[] {
    return this.dictionary.words.reduce((acc, word, i) => {
      if (i < this.settingsService.settings.numOfWords) {
        acc = [...acc, word];
      }
      return acc;
    }, []);
  }

  check(word: IWord): boolean {
    const translation = this.state.response[word.ru];
    if (word.en.toLowerCase() === translation.toLowerCase()) {
      this.state.answerStatus[word.ru] = ANSWER_KEYS.CORRECT;
      return true;
    } else {
      this.state.answerStatus[word.ru] = ANSWER_KEYS.WRONG;
      return false;
    }
  }

  onSubmit(word: IWord) {
    this.check(word);

    const isTestPassed = this.check(word);
    if (isTestPassed) {
      this.state.notification = NOTIFICATIONS.SUCCESS;
    }
    const isAllAnswersProvided =
      Object.keys(this.state.answerStatus).length ===
      this.getChallengeWords().length;

    if (isAllAnswersProvided) {
      this.checkAllAnswers();
    }
  }

  checkAllAnswers() {
    const isAllAnswersCorrect = Object.values(this.state.answerStatus).every(
      answer => answer === ANSWER_KEYS.CORRECT
    );

    if (isAllAnswersCorrect) {
      this.state.finalResult = ANSWER_KEYS.CORRECT;
    }
  }

  reset() {
    console.log(1111);
    // this.stopTimer();
    clearInterval(this.state.timer);
    this.state = WordChallengeComponent.initalState;
    this.start();
  }
}
