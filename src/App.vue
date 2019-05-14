<template>
  <div id="app">
    <Header :numCorrect="numCorrect" :numTotal="numTotal"/>

    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="8" offset="2">
          <QuestionBox
            v-if="questions.length"
            :numTotal="numTotal"
            :currentQuestion="questions[index]"
            :next="next"
            :increment="increment"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import QuestionBox from "./components/QuestionBox.vue";

export default {
  name: "app",
  components: {
    Header,
    QuestionBox
  },
  data() {
    return {
      questions: [],
      index: 0,
      numCorrect: 0,
      numTotal: 0
    };
  },
  methods: {
    next() {
      this.index++;
      this.index >= this.questions.length && (
        this.index = 0,
        this.numCorrect = 0
        );
    },
    increment(isCorrect) {
      isCorrect && this.numCorrect++;
    }
  },
  mounted: function() {
    fetch("https://opentdb.com/api.php?amount=5&category=27&type=multiple", {
      method: "get"
    })
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        this.questions = _.map(jsonData.results, function(e, i) {
          return _.extend(e, { idx: i + 1 });
        });
        this.numTotal = jsonData.results.length;
      });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>