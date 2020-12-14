import { Comment } from "./comment.js";

class CommentManager {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.width = canvas.width;
        this.height = canvas.height;
        this.font_size = this.ctx
        this.comments = [];

        this.raf = () => {
            for (let i = this.comments.length - 1; i >= 0; i--) {
                let comment = this.comments[i];
                comment.moveStep();
                if (comment.left + comment.width < 0) {
                    this.removeComment(i);
                }
            }
            this.updateCanvas();
            window.requestAnimationFrame(this.raf);
        }
        window.requestAnimationFrame(this.raf);
    }

    shoot(content) {
        let comment = new Comment(content);
        let { width, height } = this.ctx.measureText(comment.content);
        comment.width = width;
        comment.height = height;
        comment.left = this.width;
        comment.top = Math.random() * (this.height - comment.height);
        this.comments.push(comment);
    }

    updateCanvas() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let comment of this.comments) {
            this.ctx.fillText(comment.content, comment.left, comment.top);
        }
    }

    removeComment(idx) {
        this.comments.splice(idx, 1);
    }
}

export { CommentManager };