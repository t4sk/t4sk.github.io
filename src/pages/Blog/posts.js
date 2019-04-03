const Posts = [
    {
      lang: "en",
      date: "2019-03-01",
      title: "ASDF",
      component: require("./posts/en_2019-03-01/index.js").default,
    },
    {
      lang: "jp",
      date: "2019-01-01",
      title: "にほん",
      component: require("./posts/jp_2019-01-01/index.js").default,
    },
    {
      lang: "en",
      date: "2018-03-10",
      title: "qwer",
      component: require("./posts/en_2018-03-10/index.js").default,
    },
]

export default Posts
