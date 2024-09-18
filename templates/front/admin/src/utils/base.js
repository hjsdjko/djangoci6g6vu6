const base = {
    get() {
        return {
            url : "http://localhost:8080/djangoci6g6vu6/",
            name: "djangoci6g6vu6",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于协同过滤算法的经济型酒店推荐系统"
        } 
    }
}
export default base
