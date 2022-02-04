
// let tabs = document.querySelector(".tab-list");
let tabItem = document.querySelectorAll(".tab-item");
let gallery = document.querySelectorAll(".gallery-item");

tabItem.forEach(galleryTab);

function galleryTab(item){
	item.addEventListener("click", function(){
		let currentBtn = item;
		let tabId = currentBtn.getAttribute("data-id");
		let itemToShow = document.querySelectorAll("#" + tabId);

		if(! currentBtn.classList.contains("active")){

			if(currentBtn.classList.contains("g-all")){
				tabItem.forEach(elem => {
					elem.classList.remove("active");
				});

				gallery.forEach(elem => {
					elem.classList.add("active");
				});
				currentBtn.classList.add("active");

				console.log("all");

				return 0;
			}

			tabItem.forEach(elem => {
				elem.classList.remove("active");
			});
			
			gallery.forEach(elem => {
				elem.classList.remove("active");
			})

			currentBtn.classList.add("active");
			itemToShow.forEach(elem => {
				elem.classList.add("active");
			})
		}
	})
}

document.querySelector('.tab-item').click();