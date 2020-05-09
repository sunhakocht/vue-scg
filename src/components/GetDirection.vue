<template>
  <div id="body" style="padding: 20px">
    <h1 style="margin-left: 40px;">{{question}}</h1>
    <div class="directions">
      <b-list-group  v-for="(direction, index) in steps"
                     :key="`direction${index}`">
        <b-list-group-item v-html="direction.html_instructions"></b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

const localStorage = window.localStorage;
const getDirection = () => axios.get('http://localhost:3000/getDirection').then(res => res);

export default {
  name: 'GetDirection',
  data() {
    return {
      question: '',
      steps: [],
    };
  },

  methods: {
    getDirection() {
      const localData = localStorage.getItem('getdirection');
      const now = new Date();
      if (localData) {
        const item = JSON.parse(localData);
        if (now.getTime() > item.expire) {
          localStorage.removeItem('getdirection');
        } else {
          this.question = item.question;
          this.steps = item.answer.routes[0].legs[0].steps;
          return;
        }
      }
      getDirection().then((result) => {
        if (result.data.status) {
          const cache = {
            ...result.data,
            expire: (now.getTime() + 300000),
          };
          localStorage.setItem('getdirection', JSON.stringify(cache));
          this.question = result.data.question;
          this.steps = result.data.answer.routes[0].legs[0].steps;
        }
      });
    },
  },

  mounted() {
    this.getDirection();
  },
};
</script>

<style scoped>
  .directions{
    margin-left: 80px;
  }
  .html-instructions{
    color: #42b983;
    padding: 3px;
  }
</style>
