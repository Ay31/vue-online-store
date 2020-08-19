<template>
  <!-- <div>
    <div class="admin-new">
      <div class="container">
        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <ul class="admin-menu">
            <li>
              <router-link to="/admin">查看商品</router-link>
            </li>
            <li>
              <router-link to="/admin/new">添加商品</router-link>
            </li>
            <li>
              <router-link to="/admin/manufacturers">查看生产商</router-link>
            </li>
            <li>
              <router-link to="/admin/manufacturers/new">添加生产商</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>-->
  <div>
    <div class="title">
      <h1>In Admin</h1>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
