<template>
  <div id="footer">
    <p>&copy; Bản quyền thuộc về <b>MT</b>.</p>
  </div>
</template>
<style scoped>
#footer {
  width: 900px;
  height: 140px;
  margin: 0px auto;
}

#footer p {
  margin: 0;
  padding-top: 30px;
  line-height: normal;
  text-align: center;
  font-family: "Abel", sans-serif;
  font-size: 18px;
  color: #786562;
}

#footer a {
  text-decoration: underline;
  color: #786562;
}

#about {
  overflow: hidden;
  width: 820px;
  margin: 30px auto 0px auto;
  padding: 40px 40px;
  background: #ffffff url(../assets/images/page-gradient-bg.png) repeat-x left
    bottom;
  box-shadow: inset 0px 0px 1px 1px rgba(255, 255, 255, 1);
  outline: 2px dashed #7d7d7d;
  outline-offset: -10px;
}

#about .title {
  padding-bottom: 10px;
  letter-spacing: -1px;
  text-transform: lowercase;
  color: #1d110a;
}

#two-column {
  padding-top: 30px;
}

#two-column h2 {
  padding-bottom: 20px;
  letter-spacing: -1px;
  text-transform: lowercase;
  font-size: 30px;
  color: #a26500;
}

#two-column #column1 {
  float: left;
  width: 390px;
}

#two-column #column2 {
  float: right;
  width: 390px;
}

.list-style1 {
  margin: 0px;
  padding: 0px;
  list-style: none;
}

.list-style1 li {
  padding: 5px 0px;
  border-top: 1px solid #eeeeee;
}

.list-style1 a:hover {
  text-decoration: underline;
}

.list-style1 .first {
  border-top: none;
}

#banner {
  width: 900px;
  margin: 30px auto;
}

.featured-post {
  padding: 0px 0px 30px 0px;
  color: #ad9792;
}

.featured-post .title {
  padding-bottom: 20px;
  color: #ffffff;
}

.featured-post a {
  color: #ffffff;
}
</style>
