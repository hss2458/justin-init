const justin = {
    init: function () {

    },

    getScroll: function () {
        $(window).on("scroll", function () { //스크롤할 때, 함수 실행
            const scrollTop = $(window).scrollTop(); //변수 scrolltop은 scrolltop의 수치값
            console.log("@@ scrollTop", scrollTop); // 콘솔에 기록한다. "@@ scrollTop"+ scrolltop(위에 선언한 변수명)을

            if(scrollTop > 200) {  //만약 scrolltop이 200보다 크면
                $(".bio").addClass("show-bio"); //.bio 클래스에 show-bio 클래스를 더해준다.
            } else {
                $(".bio").removeClass("show-bio"); // 아니면 show-bio 클래스를 지운다.
            }

            if(scrollTop > 600) { //만약 scrolltop이 600보다 크면
                $(".header").addClass("show-header"); //.header 클래스에 .show-header 클래스를 더한다.
            } else {
                $(".header").removeClass("show-header"); //아니면 더한 클래스를 지운다.
            }
        })

        console.log("잘되고 있나??")
    }
}

justin.getScroll(); // justin 변수의 getScroll 함수를 실행한다.