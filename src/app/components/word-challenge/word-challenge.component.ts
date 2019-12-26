import { Component, OnInit, OnDestroy } from "@angular/core";
import { IWord, IChallengeState } from "src/model/models";
import {
  ANSWER_KEYS,
  NOTIFICATIONS,
  TEST_COMPLETE,
  TEST_FAILED,
  LanguageKeys
} from "../../../constants";
import { DictionaryService } from 'src/app/services/dictionary.service';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: "app-word-challenge",
  templateUrl: "./word-challenge.component.html",
  styleUrls: ["./word-challenge.component.css"]
})
export class WordChallengeComponent implements OnInit, OnDestroy {
  static getInitialState() {
    return {
      response: {},
      answerStatus: {},
      timeCount: 0,
      isChallengeVisible: false,
      resultMessage: "",
      timer: 0,
      notification: NOTIFICATIONS.EMPTY,
      finalResult: null,
      settings: {}
    };
  }

  state: IChallengeState;

  constructor(
    private dictionary: DictionaryService,
    private settingsService: SettingsService
  ) {
    this.state = {
      ...WordChallengeComponent.getInitialState(),
      settings: this.settingsService.settings
    };
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.stopTimer();
  }

  startTimer() {
    this.state.timer = setInterval(() => {
      if (this.state.timeCount === this.settingsService.settings.time) {
        this.stopTimer();
        this.state.resultMessage = TEST_FAILED;
      } else {
        this.state.timeCount++;
      }
    }, 1000);
  }

  private stopTimer() {
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
    const translation = this.state.response[
      word[this.settingsService.settings.currentLanguage]
    ];
    const w = word[this.settingsService.settings.currentLanguage];
    const inputLang =
      this.settingsService.settings.currentLanguage === LanguageKeys.en
        ? LanguageKeys.ru
        : LanguageKeys.en;

    if (word[inputLang].toLowerCase() === translation.toLowerCase()) {
      this.state.answerStatus[w] = ANSWER_KEYS.CORRECT;
      return true;
    } else {
      this.state.answerStatus[w] = ANSWER_KEYS.WRONG;
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
      const output = this.checkAllAnswers();
      if (output) {
        this.state.resultMessage = TEST_COMPLETE;
      } else {
        this.state.resultMessage = TEST_FAILED;
      }
    }
  }

  checkAllAnswers() {
    let result = false;
    const isAllAnswersCorrect = Object.values(this.state.answerStatus).every(
      answer => answer === ANSWER_KEYS.CORRECT
    );

    if (isAllAnswersCorrect) {
      this.state.finalResult = ANSWER_KEYS.CORRECT;
      this.stopTimer();
      result = true;
    }
    return result;
  }

  reset() {
    this.stopTimer();

    this.state = {
      ...WordChallengeComponent.getInitialState(),
      isChallengeVisible: true,
      settings: this.settingsService.settings
    };
    this.start();
  }
}
