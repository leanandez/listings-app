import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = [ "detailText", "readMoreBtn" ]
  
    connect() {
      this.checkViewportSize();
      window.addEventListener("resize", () => this.checkViewportSize());
    }
  
    checkViewportSize() {
      if (window.matchMedia("(max-width: 575.98px)").matches) {
        this.applyTruncation();
      } else {
        this.removeTruncation();
      }
    }
  
    applyTruncation() {
      if (!this.initialized) {
        this.fullText = this.detailTextTarget.textContent;
        this.words = this.fullText.split(" ");
        this.displayedWordsCount = 30;
  
        if (this.words.length > this.displayedWordsCount) {
          this.displayedText = this.words.slice(0, this.displayedWordsCount).join(" ") + "...";
          this.detailTextTarget.textContent = this.displayedText;
          this.isTruncated = true;
          this.readMoreBtnTarget.classList.remove("hidden");
        } else {
          this.readMoreBtnTarget.classList.add("hidden");
        }
  
        this.initialized = true;
      }
    }
  
    removeTruncation() {
      if (this.initialized) {
        this.detailTextTarget.textContent = this.fullText;
        this.readMoreBtnTarget.classList.add("hidden");
        this.initialized = false;
      }
    }
  
    handleText() {
      if (this.isTruncated) {
        this.detailTextTarget.textContent = this.fullText;
        this.readMoreBtnTarget.textContent = "Read less";
        this.isTruncated = false;
      } else {
        this.detailTextTarget.textContent = this.displayedText;
        this.readMoreBtnTarget.textContent = "Read more";
        this.isTruncated = true;
      }
    }
  }
