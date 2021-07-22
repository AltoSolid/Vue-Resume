new Vue({
    el: "#app",
    data: {
        resumeInfo: [],
    },
    methods: {
        getResumeInfo: function() {
            axios.get("resume.json").then(res => {
                this.resumeInfo = res.data;
            });
        }
    },
    mounted: function() {
        this.getResumeInfo();
    },
});