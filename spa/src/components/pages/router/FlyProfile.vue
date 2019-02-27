<template>
    <div>
        <p>
            你好！我是二级路由fly，我还有子路由！
        </p>
        <p>
            <router-link to="/router/fly/A">三级路由A</router-link>
            <router-link to="/router/fly/B">三级路由B</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>
