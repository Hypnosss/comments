import { shoot1 } from "./comment_manager.js";

let btn_1 = $("#btn1"),
    btn_5 = $("#btn5"),
    btn_20 = $("#btn20");
let input = $("input");

btn_1.on("click", () => {
    shoot(1);
});

btn_5.on("click", () => {
    shoot(5);
});

btn_20.on("click", () => {
    shoot(20);
});


function shoot(times) {
    let words = input.val();
    input.val("");
    for(let i = 0; i < times; i++) {
        shoot1(words);
    }
}