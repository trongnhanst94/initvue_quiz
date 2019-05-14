<template>
  <div class="question-box-container">
    <b-jumbotron>
      <template slot="header">Test IQ</template>

      <template slot="lead">{{ currentQuestion.question }}</template>

      <hr class="my-4">

      <b-list-group>
        <b-list-group-item
          v-for="(answer, index) in shuffledAnswers"
          @click="selectAnswer(index)"
          :key="index"
          :class="answerClass(index)"
        >{{ answer }}</b-list-group-item>
      </b-list-group>

      <hr class="my-4">

      <b-button
        @click="submitAnswer"
        :disabled="selectedIndex === null || answered"
        variant="primary"
      >Submit</b-button>
      <span style="margin: 5px"/>
      <b-button
        @click="next"
        :variant="[numTotal === currentQuestion.idx ? 'danger' : 'success']"
      >{{ numTotal === currentQuestion.idx ? 'Reset' : 'Next' }}</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  props: {
    currentQuestion: Object,
    next: Function,
    increment: Function,
    numTotal: Number
  },
  data() {
    return {
      selectedIndex: null,
      correctIndex: null,
      shuffledAnswers: [],
      answered: false,
      isNext: false
    };
  },
  watch: {
    currentQuestion: {
      immediate: true,
      handler() {
        this.answered = false,
        this.selectedIndex = null;
        this.shuffleAnswers();
      }
    }
  },
  methods: {
    selectAnswer(idx) {
      this.selectedIndex = idx;
    },
    submitAnswer() {
      let isCorrect = false;

      if (this.selectedIndex === this.correctIndex) {
        isCorrect = true;
      }
      this.answered = true;
      this.increment(isCorrect);
    },
    answerClass(idx) {
      const { selectedIndex, answered, correctIndex } = this;

      return selectedIndex === idx && !answered
        ? "selected"
        : correctIndex === idx && answered
        ? "correct"
        : correctIndex !== idx && answered && selectedIndex === idx
        ? "incorrect"
        : "";
    },
    shuffleAnswers() {
      this.shuffledAnswers = _.shuffle([
        ...this.currentQuestion.incorrect_answers,
        this.currentQuestion.correct_answer
      ]);
      this.correctIndex = this.shuffledAnswers.indexOf(
        this.currentQuestion.correct_answer
      );
    }
  },
  computed: {
    answers() {
      return [
        ...this.currentQuestion.incorrect_answers,
        this.currentQuestion.correct_answer
      ];
    }
  }
};
</script>

<style scoped>
.list-group {
  margin-bottom: 15px;
}
.list-group-item:hover {
  cursor: pointer;
}
.btn {
  margin: 0 5px;
}
.selected {
  color: #004085;
  background-color: #cce5ff;
  border-color: #b8daff;
}
.correct {
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
}
.incorrect {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}
</style>