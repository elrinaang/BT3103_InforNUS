<template>
  <body>
    <div class="jc_selection_pane" style="float:left">
      <img
        id="jc_image"
        src="../assets/jc_image.jpg"
        @click="DoSomething($event);"
      />
    </div>

    <div class="poly_selection_pane" style="float:right">
      <img
        id="poly_image"
        src="../assets/poly_image.jpg"
        @click="DoSomething($event);"
      />
    </div>
  </body>
</template>

<script>
export default {
  name: "selectionPane",
  props: {},
  methods: {
    DoSomething: function(event) {
      let targetId = event.currentTarget.id;
      let polyCourse;
      let polyGpa;
      if (targetId == "jc_image") {
        var doc = this.$prompt(
          "Please Enter Your Rank Point",
          "Junior College",
          {
            confirmButtonText: "OK",
            cancelButtonText: "Cancel",
            inputPattern: /^\d+\.\d{0,2}$/,
            inputErrorMessage: "Invalid. Please Enter to at least 1 d.p "
          }
        )
          .then(({ value }) => {
            this.$message({
              type: "success",
              message: "Your 'A' level rank point is: " + value
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "Not From Jc? :("
            });
          });
      }
      // start for poly
      else if (targetId == "poly_image") {
        var doc_1 = this.$prompt("Please Enter Your Course", "Polytechnic", {
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
          inputPattern: /[A-Z]/g,
          inputErrorMessage: "Please key in the name of your course correctly!"
        })
          .then(({ value }) => {
            polyCourse = value;
            this.$message({
              type: "success",
              message: "The Course You Took In Polytechnic is: " + value
            });
            var doc_2 = this.$prompt("Please Enter Your GPA", "Polytechnic", {
              confirmButtonText: "OK",
              cancelButtonText: "Cancel",
              inputPattern: /^\d+\.\d{0,2}$/,
              inputErrorMessage: "Invalid. Please input your GPA properly "
            })
              .then(({ value }) => {
                polyGpa = value;
                this.$message({
                  type: "success",
                  message:
                    "Your Poly GPA is: " +
                    polyGpa +
                    " and You are from " +
                    polyCourse
                });
              })
              .catch(() => {
                this.$message({
                  type: "info",
                  message: "Not From Poly? :("
                });
              });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "Not From Poly? :("
            });
          });
      }
    }
  }
};</script
><style scoped>
#jc_image {
  background: url("../assets/jc_image.jpg");
  width: 50%;
  position: absolute;
  left: 0px;
  height: 100%;
}

#poly_image {
  background: url("../assets/poly_image.jpg");
  width: 50%;
  position: absolute;
  right: 0px;
  height: 100%;
}
</style>
