<template lang="html">
  <div>
    <navbar></navbar>
    <div class="container" style="margi-top:60px">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <div class="panel panel-default">
            <div class="panel-heading">
              <router-link to="/createArticle" class="btn btn-primary">Create Article</router-link>
            </div> 
            <div class="panel-body">
              <table class="table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="article in data">
                    <td>{{article.title}}</td>
                    <td></td>
                    <td>
                      <router-link :to="'/updateArticle/'" class="btn btn-info"><span class="glyphicon glyphicon-edit" aria-hidden="true"></span></router-link>
                      <button @click="deleteArticle()" type="submit" class="btn btn-danger"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/Navbar'
export default {
  data () {
    return {
      data: []
    }
  },
  components: {navbar},
  methods: {
    cekLogin () {
      if (localStorage.token) {
        this.isLogin = true
      } else {
        this.isLogin = false
        this.$router.push('/')
      }
    },
    getAllArticle () {
      this.$http.get('/article')
      .then(res => {
        console.log(res)
        this.data = res.data
      })
      .catch(err => console.log(err))
    }
  },
  created () {
    this.getAllArticle()
    this.cekLogin()
  }
}
</script>

<style lang="css">
</style>
