new Vue({
    el: '#app',
    
    data () {
      return {
          courses: [],
          title: "",
          time: ""
      }
    },
    
    computed: {
      totalTime () {
        return this.courses.reduce(function(total, course){
          return parseInt(total) + parseInt(course.time)
        }, 0);
      }
    },
    
    methods: {
      addCourse () {
        this.courses.push({
          title: this.title,
          time: this.time
        })
      }
    }
  })