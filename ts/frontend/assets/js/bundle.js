/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/poo/A0018/index.ts"
/*!********************************!*\
  !*** ./src/poo/A0018/index.ts ***!
  \********************************/
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var VideoPlayer = /** @class */ (function () {
    function VideoPlayer(videoPlayer, playButton, stopButtom) {
        this.videoPlayer = videoPlayer;
        this.playButton = playButton;
        this.stopButtom = stopButtom;
    }
    VideoPlayer.prototype.playToggle = function () {
        if (this.videoPlayer.paused) {
            this.videoPlayer.play();
            this.playButton.innerText = 'Pause';
        }
        else {
            this.videoPlayer.pause();
            this.playButton.innerText = 'Play';
        }
    };
    VideoPlayer.prototype.stop = function () {
        this.videoPlayer.pause();
        this.videoPlayer.currentTime = 0;
        this.playButton.innerText = 'Play';
    };
    VideoPlayer.prototype.iniciarEventos = function () {
        var _this = this;
        this.playButton.addEventListener('click', function () {
            _this.playToggle();
        });
        this.stopButtom.addEventListener('click', function () {
            _this.stop();
        });
    };
    return VideoPlayer;
}());
var videoPlayer = new VideoPlayer(document.querySelector('.video'), document.querySelector('.play'), document.querySelector('.stop'));
videoPlayer.iniciarEventos();


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!****************************************************!*\
  !*** ./src/tipos-basicos/A0020-exercicio/index.ts ***!
  \****************************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
// import './form-control'
__webpack_require__(/*! ../../poo/A0018/index */ "./src/poo/A0018/index.ts");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVlBO0lBTUUscUJBQ0UsV0FBNkIsRUFDN0IsVUFBNkIsRUFDN0IsVUFBNkI7UUFFN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDN0IsQ0FBQztJQUdILGdDQUFVLEdBQVY7UUFDRSxJQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFDdEMsQ0FBQzthQUNHLENBQUM7WUFDSCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUNyQyxDQUFDO0lBQ0gsQ0FBQztJQUVELDBCQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7SUFDckMsQ0FBQztJQUVELG9DQUFjLEdBQWQ7UUFBQSxpQkFTQztRQVJDLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1lBQ3hDLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1lBQ3hDLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNkLENBQUMsQ0FBQztJQUVKLENBQUM7SUFFSCxrQkFBQztBQUFELENBQUM7QUFFRCxJQUFNLFdBQVcsR0FBRyxJQUFJLFdBQVcsQ0FDakMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQXFCLEVBQ3BELFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFzQixFQUNwRCxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBc0IsQ0FDckQsQ0FBQztBQUVGLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQzs7Ozs7OztVQ2pFN0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7Ozs7O0FDNUJBLDBCQUEwQjtBQUMxQiw2RUFBOEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cy8uL3NyYy9wb28vQTAwMTgvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHMvLi9zcmMvdGlwb3MtYmFzaWNvcy9BMDAyMC1leGVyY2ljaW8vaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIFZpZGVvUGxheWVyRWxlbWVudHMge1xuICB2aWRlb1BsYXllcjogSFRNTFZpZGVvRWxlbWVudDtcbiAgcGxheUJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIHN0b3BCdXR0b206IEhUTUxCdXR0b25FbGVtZW50O1xufVxuXG5pbnRlcmZhY2UgVmlkZW9QbGF5ZXJQcm90b2NvbCB7XG4gIHBsYXlUb2dnbGUoKTogdm9pZDtcbiAgc3RvcCgpOiB2b2lkO1xuICBpbmljaWFyRXZlbnRvcygpOiB2b2lkO1xufVxuXG5jbGFzcyBWaWRlb1BsYXllciBpbXBsZW1lbnRzIFZpZGVvUGxheWVyUHJvdG9jb2x7XG5cbiAgcHJpdmF0ZSB2aWRlb1BsYXllcjogSFRNTFZpZGVvRWxlbWVudDtcbiAgcHJpdmF0ZSBwbGF5QnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgcHJpdmF0ZSBzdG9wQnV0dG9tOiBIVE1MQnV0dG9uRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICB2aWRlb1BsYXllcjogSFRNTFZpZGVvRWxlbWVudCxcbiAgICBwbGF5QnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCxcbiAgICBzdG9wQnV0dG9tOiBIVE1MQnV0dG9uRWxlbWVudClcbiAgICB7XG4gICAgdGhpcy52aWRlb1BsYXllciA9IHZpZGVvUGxheWVyO1xuICAgIHRoaXMucGxheUJ1dHRvbiA9IHBsYXlCdXR0b247XG4gICAgdGhpcy5zdG9wQnV0dG9tID0gc3RvcEJ1dHRvbTtcbiAgICB9XG5cblxuICBwbGF5VG9nZ2xlKCk6IHZvaWQge1xuICAgIGlmKHRoaXMudmlkZW9QbGF5ZXIucGF1c2VkKXtcbiAgICAgIHRoaXMudmlkZW9QbGF5ZXIucGxheSgpO1xuICAgICAgdGhpcy5wbGF5QnV0dG9uLmlubmVyVGV4dCA9ICdQYXVzZSc7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICB0aGlzLnZpZGVvUGxheWVyLnBhdXNlKCk7XG4gICAgICB0aGlzLnBsYXlCdXR0b24uaW5uZXJUZXh0ID0gJ1BsYXknO1xuICAgIH1cbiAgfVxuXG4gIHN0b3AoKTogdm9pZCB7XG4gICAgdGhpcy52aWRlb1BsYXllci5wYXVzZSgpO1xuICAgIHRoaXMudmlkZW9QbGF5ZXIuY3VycmVudFRpbWUgPSAwO1xuICAgIHRoaXMucGxheUJ1dHRvbi5pbm5lclRleHQgPSAnUGxheSc7XG4gIH1cblxuICBpbmljaWFyRXZlbnRvcygpOiB2b2lkIHtcbiAgICB0aGlzLnBsYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLnBsYXlUb2dnbGUoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc3RvcEJ1dHRvbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuc3RvcCgpO1xuICAgIH0pXG5cbiAgfVxuXG59XG5cbmNvbnN0IHZpZGVvUGxheWVyID0gbmV3IFZpZGVvUGxheWVyKFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlkZW8nKSBhcyBIVE1MVmlkZW9FbGVtZW50LFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheScpIGFzIEhUTUxCdXR0b25FbGVtZW50LFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RvcCcpIGFzIEhUTUxCdXR0b25FbGVtZW50LFxuKTtcblxudmlkZW9QbGF5ZXIuaW5pY2lhckV2ZW50b3MoKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGV4aXN0cyAoZGV2ZWxvcG1lbnQgb25seSlcblx0aWYgKF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGltcG9ydCAnLi9mb3JtLWNvbnRyb2wnXG5pbXBvcnQgJy4uLy4uL3Bvby9BMDAxOC9pbmRleCdcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==