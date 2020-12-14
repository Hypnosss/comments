class Comment {
    constructor(content) {
        this.speed = Math.random() * 1;
        this.content = content;
    }

    moveStep() {
        this.left -= this.speed;
    }
}

export { Comment };