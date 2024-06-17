<script setup>
import { ref } from 'vue'
import { ArrowDown } from '@element-plus/icons-vue'
const activeName = ref('first')
let topfilterlist = ref([
    {
        id: 1, name: 'first', label: '热门筛选', list: ['天安门广场', '王府井', '北京大学', '故宫博物院', '环球度假区', '前门大街',
            '天安门城楼', '南锣鼓巷', '颐和园', '大兴区', '八达岭长城', '大栅栏', '天坛',]
    },
    { id: 2, name: 'second', label: '机场车站', list: ['北京南站', '大兴国际机场', '北京西站', '首教国际机场', '北京火车站', '北京北站', '北京朝阳站', '丰台站', '八达岭站', '燕山站'] },
    { id: 3, name: 'third', label: '商业区', list: ['三里屯', '国贸地区', '西直门', '怀柔风景区', '西直门', '古北水镇', '西单', '天坛公园', '公主坟', '奥体中心地区', '门头沟', '后海', '亦庄地区'] },
    {
        id: 4, name: 'fourth', label: '景点', list: ['中国国家博物馆', '园明园', '恭王府', '后海', '雍和宫', '什刹海', '前门大街', '慕田峪长城', '雁栖湖', '崇文门', '五道口', '中国科学技术馆', '南锣鼓巷',
            '天安门广场', '王府井', '故言博物院', '环球庭假区', '北京大学']
    }
])
let pricelist = ref(['五星(钻级)', '四星(钻级)', '三星(钻级)', '二星(钻级)及以一', '150以下', '150-300', '300-450', '450-600', '600以上'])
let filterlist = ref([
    { title: '早餐', list: ['含早餐', '单份早餐', '多份早餐'] },
    { title: '支付方式', list: ['在线付款', '到店付款', '闪住'] },
    { title: '房型', list: ['双床房', '三床房', '单人床房', '大床房', '特大床房'] },
    { title: '酒店设施', list: ['免费停车', '室内游泳', '自动取款机', '咖啡厅,', '收费wifi', '行政楼层', '公共区域禁烟', '礼品廊'] },
    { title: '住宿类型', list: ['商务', '公寓', '度假', '会议酒店'] },
    { title: '特色主题', list: ['情侣', '自然风光', '历史文化', '城市特色', '名人文化', '艺术特色', '其他主题'] },
    { title: '品牌', list: ['希尔顿', '艾美酒店', '傲途格', '温德姆', '康莱德'] },
    { title: '评分', list: ['4.8分以上', '4.5分', '4.0分', '3.5分',] }
])
</script>

<template>
    <div class="topfilter">
        <div>
            <h4>位置区域</h4>
        </div>
        <div class="topfilter-tab">
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                <el-tab-pane :label="v.label" :name="v.name" v-for="v in topfilterlist" :key="v.id">
                    <el-button v-for="(k, i) in v.list" :key="i" size="small" type="info" plain>{{ k }}</el-button>
                </el-tab-pane>
            </el-tabs>
        </div>
        <div>
            <h4>星级价格</h4>
        </div>
        <div class="topfilter-price">
            <el-button size="small" type="info" plain v-for="(v, i) in pricelist" :key="i">{{ v }}</el-button>
        </div>
        <div>
            <h4>高级筛选</h4>
        </div>
        <div class="topfilter-filter">
            <el-dropdown v-for="(v, i) in filterlist" :key="i">
                <span class="el-dropdown-link">
                    {{ v.title }}
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item v-for="(k, i) in v.list" :key="i">{{ k }}</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>

</template>

<style scoped></style>
