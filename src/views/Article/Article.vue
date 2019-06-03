<template>
  <div class="article">
  	<div class="container-fluid city">
      <ul>
        <li>
          <a href="#">全部</a>
        </li>
        <li>
          <a href="#">军事</a>
        </li>
        <li>
          <a href="#">健康</a>
        </li>
        <li>
          <a href="#">影视</a>
        </li>
        <li>
          <a href="#">文化</a>
        </li>
        <li>
          <a href="#">金融</a>
        </li>
        <li>
          <a href="#">娱乐</a>
        </li>
      </ul>
    </div>
    <div class="ranking">
      <ul>
        <li>点赞最多</li>
        <li>评论最多</li>
        <li>最新发布</li>
      </ul>
    </div>
    <div class="con_wrap">
      <h3 class="text-center">海大最美</h3>
      <p>广东海洋大学（Guangdong Ocean University）坐落于海滨城市湛江市，是广东省人民政府和国家海洋局共建的广东省重点建设大学之一，是一所以海洋、水产、食品学科为特色，理、工、农、文、经、管、法、教、艺等学科协调发展，以应用学科为主体的多科性海洋大学。是具有“学士、硕士、博士”完整学位授权体系的大学，也是广东省高水平大学重点学科建设项目高校 [1]  。</p>
      <p>学校的前身是创建于1935年的广东省立高级水产职业学校。1997年1月10日，湛江水产学院和湛江农业专科学校合并组建湛江海洋大学。2001年12月，全国重点中专湛江气象学校并入。2005年6月15日，经教育部批准，湛江海洋大学更名为广东海洋大学。</p>
      <p>截至2017年9月，学校有湖光校区（校本部）、霞山校区、海滨校区校园总面积4892亩，其中主校区占地4083亩。校舍总建筑面积达77.93万平方米，图书馆藏书317.5万册（含电子图书），教学科研设备值3.9亿元，固定资产值约18.1亿元。 [2]  学校设有19个二级学院、1个独立学院，有73个本科专业，39个高职高专专业。现有全日制本科生、研究生、留学生近3.2万人，独立学院2万余人，成人高等教育学生1.4万余人。</p>
      <div class="img">
        <img src="image/3.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'article',
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
.city{
  background:rgb(255, 153, 51);
  height: 65px;
  padding-top: 10px;
  border-radius: 5px
}
.city ul{
  border-bottom: 1px solid #fff;
  height: 40px;
  margin: 0 38px
}
.city ul li{
  float: left;
  line-height: 40px;
  padding: 0 10px;
  color: #fff
}
.ranking{
  height: 40px
}
.ranking ul{
  height: 40px;
  display: flex;
  align-items: center
}
.ranking ul li{
  float: left;
  padding: 4px 10px;
  border: 1px solid #ccc;
  margin: 0 10px;
  border-radius: 5px;
  cursor: pointer;
}
.ranking ul li:hover{
  color: #f40;
  border: 1px solid #f40;
}
.con_wrap h3{
  margin: 10px 0;
}
.con_wrap p{
  text-indent: 2em;
  line-height: 1.5em;
  font-size: 20px;
}
.con_wrap .img{
  width: 100%;
  text-align: center;
}
.con_wrap img{
  width: 600px;
}
</style>
