
const Feed = () => {
	return (
		<div className="justify-center md:w-2/3 mx-auto px-2 md:px-8 overflow-y-auto scrollbar-hide">
		        <div className="flex mt-2.5 space-x-2">
		          <div className="relative cursor-pointer">
		            <img
		              src="/avatars/rahul.gif"
		              className="absolute m-1 p-0.5 h-10 bg-white rounded-full shadow z-[3]" alt=""
		            />
		            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 472.615 472.615"
		              className="absolute h-10 ml-6 mt-11 text-white hover:text-gray-200 z-[2]"
		              fill="currentColor" xmlSpace="preserve"> <g> <g> <polygon points="246.154,226.462 246.154,0 226.462,0 226.462,226.462 0,226.462 0,246.154 226.462,246.154 226.462,472.615 246.154,472.615 246.154,246.154 472.615,246.154 472.615,226.462 		"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>
		            </svg>
		            <img
		              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMfWYBaBINACjw0Bmi1eFp4q9rHjZ5xnGRTQ&usqp=CAU"
		              className="h-32 rounded-xl hover:scale-[1.05] shadow-md z-[1]" alt=""
		            />
		          </div>
		          <div className="relative cursor-pointer">
		            <img
		              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsEw9SbR0vDPRlODfN41Dcy0e8AbmUI_CouA&usqp=CAU"
		              className="absolute m-1 p-0.5 h-10 bg-white rounded-full shadow z-[3]" alt=""
		            />
		            <img 
		              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMxf-x5pEfGLjKal9WNa4HPo_Nhi2rPgoGOg&usqp=CAU"
		              className="h-32 rounded-xl hover:scale-[1.05] shadow-md z-[1]" alt=""
		            />
		          </div>
		        </div>
		
		        <div className="mt-2.5 p-4 rounded-xl bg-white shadow">
		          <div className="flex items-center space-x-2">
		            <img
		              src="./rahul.gif"
		              className="h-8 w-8 rounded-full cursor-pointer"
		              alt=""/>
		            <div className="flex-1 p-2 rounded-full bg-gray-100">
		              <input type="text"
		                placeholder="What is in your mind, Rahul?"
		                className="px-2 w-full bg-transparent outline-none"/>
		            </div>
		          </div>
		
		          <div className="my-4 border-b"></div>
		
		          <div className="flex items-center justify-between md:justify-evenly space-x-2">
		            <button className="flex flex-1 p-2 md:p-4 items-center justify-center bg-gray-100 space-x-2 rounded-xl">
		              <svg width="24px" height="24px"
		                viewBox="0 0 24 24" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
		                fill="currentColor"
		                className="h-6 text-red-500">
		                <g id="grid_system"/><g id="_icons"><path d="M20.8,7.3C20,6.8,19,6.6,18.1,6.9l-2.3,0.8C15.2,6.1,13.7,5,12,5H6C3.8,5,2,6.8,2,9v6c0,2.2,1.8,4,4,4h6   c1.7,0,3.2-1.1,3.8-2.7l2.3,0.8c0.3,0.1,0.6,0.2,1,0.2c0.6,0,1.2-0.2,1.7-0.6c0.8-0.6,1.2-1.5,1.2-2.4V9.8   C22,8.8,21.5,7.9,20.8,7.3z M12,17H6c-1.1,0-2-0.9-2-2V9c0-1.1,0.9-2,2-2h6c1.1,0,2,0.9,2,2v6C14,16.1,13.1,17,12,17z M20,14.2   c0,0.3-0.2,0.6-0.4,0.8c-0.3,0.2-0.6,0.2-0.9,0.1L16,14.3V9.7l2.7-0.9C19,8.7,19.3,8.8,19.6,9C19.8,9.2,20,9.4,20,9.8V14.2z"/></g>
		              </svg>
		              <p className="text-sm md:text-normal">Live Video</p>
		            </button>
		            <button className="flex flex-1 p-2 md:p-4 items-center justify-center bg-gray-100 space-x-2 rounded-xl">
		              <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
		                fill="currentColor"
		                className="h-6 text-green-500">
		                <path d="M15,6 C16.5976809,6 17.9036609,7.24891996 17.9949073,8.82372721 L18,9 L18,19 C18,20.5976809 16.75108,21.9036609 15.1762728,21.9949073 L15,22 L5,22 C3.40231912,22 2.09633912,20.75108 2.00509269,19.1762728 L2,19 L2,9 C2,7.40231912 3.24891996,6.09633912 4.82372721,6.00509269 L5,6 L15,6 Z M16,14.762 L12.7682213,18.6401844 C12.418662,19.0596556 11.8047124,19.1163346 11.3858753,18.7893779 L11.2928932,18.7071068 L9,16.415 L5.414,20 L15,20 C15.5128358,20 15.9355072,19.6139598 15.9932723,19.1166211 L16,19 L16,14.762 Z M19,2 C20.5976809,2 21.9036609,3.24891996 21.9949073,4.82372721 L22,5 L22,18 C22,18.5522847 21.5522847,19 21,19 C20.4871642,19 20.0644928,18.6139598 20.0067277,18.1166211 L20,18 L20,5 C20,4.48716416 19.6139598,4.06449284 19.1166211,4.00672773 L19,4 L6,4 C5.44771525,4 5,3.55228475 5,3 C5,2.48716416 5.38604019,2.06449284 5.88337887,2.00672773 L6,2 L19,2 Z M15,8 L5,8 C4.48716416,8 4.06449284,8.38604019 4.00672773,8.88337887 L4,9 L4,18.584 L8.29289322,14.2928932 C8.65337718,13.9324093 9.22060824,13.9046797 9.61289944,14.2097046 L9.70710678,14.2928932 L11.932,16.517 L16,11.636 L16,9 C16,8.48716416 15.6139598,8.06449284 15.1166211,8.00672773 L15,8 Z M6.5,9 C7.32842712,9 8,9.67157288 8,10.5 C8,11.3284271 7.32842712,12 6.5,12 C5.67157288,12 5,11.3284271 5,10.5 C5,9.67157288 5.67157288,9 6.5,9 Z"/>
		              </svg>
		              <p className="text-sm md:text-normal">Photo / Video</p>
		              <input type="files" hidden/>
		            </button>
		            <button className="flex flex-1 p-2 md:p-4 items-center justify-center bg-gray-100 space-x-2 rounded-xl">
		              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			        viewBox="0 0 330 330" xmlSpace="preserve"
		                fill="currentColor"
		                className="h-6 text-yellow-500">
		                <g id="XMLID_92_">
			          <path id="XMLID_93_" d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M165,300
			          c-74.439,0-135-60.561-135-135S90.561,30,165,30s135,60.561,135,135S239.439,300,165,300z"/>
			          <path id="XMLID_104_" d="M205.306,205.305c-22.226,22.224-58.386,22.225-80.611,0.001c-5.857-5.858-15.355-5.858-21.213,0
				  c-5.858,5.858-5.858,15.355,0,21.213c16.963,16.963,39.236,25.441,61.519,25.441c22.276,0,44.56-8.482,61.519-25.441
				  c5.858-5.857,5.858-15.355,0-21.213C220.661,199.447,211.163,199.448,205.306,205.305z"/>
			          <path id="XMLID_105_" d="M115.14,147.14c3.73-3.72,5.86-8.88,5.86-14.14c0-5.26-2.13-10.42-5.86-14.14
				  c-3.72-3.72-8.88-5.86-14.14-5.86c-5.271,0-10.42,2.14-14.141,5.86C83.13,122.58,81,127.74,81,133c0,5.26,2.13,10.42,5.859,14.14
				  C90.58,150.87,95.74,153,101,153S111.42,150.87,115.14,147.14z"/>
		                  <path id="XMLID_106_" d="M229,113c-5.26,0-10.42,2.14-14.141,5.86C211.14,122.58,209,127.73,209,133c0,5.27,2.14,10.42,5.859,14.14
		                  C218.58,150.87,223.74,153,229,153s10.42-2.13,14.14-5.86c3.72-3.72,5.86-8.87,5.86-14.14c0-5.26-2.141-10.42-5.86-14.14
				  C239.42,115.14,234.26,113,229,113z"/>
		                </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
		              </svg>
		              <p className="text-sm md:text-normal">Filling / Activity</p>
		            </button>
		          </div>
		        </div>
		
		        <div className="py-4 space-y-4">
		          <div>
		            <div className="p-3.5 bg-white rounded-xl shadow">
		              <div className="flex items-center justify-start">
		                <img
		                  src="./rahul.gif"
		                  className="h-8 w-8 rounded-full cursor-pointer"
		                  alt=""/>
		                <p className="ml-2 cursor-pointer">Rahul Mondal</p>
		              </div>
		              <div className="my-2">
		                <p>Rahul in sunset</p>
		              </div>
		              <div className="flex justify-center -mx-3.5 min-h-[10rem] bg-slate-100">
		                <img
		                  src="https://scontent.fccu13-1.fna.fbcdn.net/v/t1.6435-9/151236903_765893930976647_5121733961730598344_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=108&ccb=1-5&_nc_sid=dd9801&efg=eyJpIjoidCJ9&_nc_ohc=j8R4HZwsG40AX-qVios&tn=-3sBOK8cxRYAb2Pj&_nc_ht=scontent.fccu13-1.fna&oh=00_AT9jWpRhRzbD0xqeHURAy3hI_0p3P6o-DlHPrB4arzHkTg&oe=627421BC"
		                  className="object-scale-down max-h-[40rem]" alt=""/>
		              </div>
		              <div className="flex mt-3.5 items-center justify-between md:justify-evenly space-x-2">
		                <button type="button"
		                  className="flex flex-1 p-2 pr-2.5 items-center justify-center space-x-1.5 text-gray-500 hover:text-blue-500 bg-gray-100 active:scale-[1.05] rounded-md">
		                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000"
		                    fill="currentColor" xmlSpace="preserve"
		                    width="24" height="24" className="h-5">
		                    <g><g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)"><path d="M4627,4806.9c-180.6-36.1-280-81.3-310.1-141.5c-18.1-30.1-36.1-514.8-42.2-1092.9c-12-879.2-24.1-1062.8-66.2-1204.3c-186.7-584.1-701.5-1047.7-1490.3-1345.8l-192.7-72.3l-78.3,75.3c-42.1,42.1-138.5,102.4-213.8,135.5c-123.4,57.2-195.7,63.2-843,63.2c-647.3,0-719.6-6-843-63.2c-165.6-75.3-286-186.7-370.3-343.2c-66.2-120.4-66.2-132.5-75.3-2312.3c-6-1394,3-2234,24.1-2303.2c51.2-201.7,186.7-376.3,364.3-472.7l162.6-90.3l653.3-9c722.6-12.1,900.2,15.1,1074.8,162.6l93.3,78.3l141.5-129.5c81.3-69.3,246.9-174.6,370.3-234.9l225.8-108.4l2348.4-9c1592.7-6,2408.6,3,2538.1,24.1c566,96.3,978.5,424.5,1150.1,909.3c33.1,93.3,195.7,1032.7,364.3,2089.5C9910.9,272.7,9920,342,9886.8,540.7c-78.3,442.6-349.3,806.9-752.7,1005.6l-228.8,114.4l-1225.4,9l-1225.4,9l-15.1,954.4c-15,1035.7-33.1,1174.2-195.7,1505.4c-159.6,325.2-499.8,584.1-873.1,665.4C5190,4840.1,4807.7,4843.1,4627,4806.9z M5455,4253c147.5-75.3,265-192.7,337.2-331.2c123.4-240.9,144.5-457.6,144.5-1541.5c0-966.5,3-1032.7,57.2-1098.9l57.2-72.3l1351.8-15c1514.4-18.1,1457.2-9,1716.1-246.9c165.6-156.6,249.9-316.1,271-517.8c15.1-174.6-529.9-3688.2-614.2-3944.1c-66.2-207.7-301.1-439.6-535.9-532.9l-180.6-72.2H5695.8c-2179.8,0-2372.5,3-2477.9,51.2c-201.7,90.3-343.2,228.8-439.6,421.5l-93.3,183.7v1978.1V489.5l174.6,54.2c210.8,66.2,641.3,277,837,412.5c403.4,271,692.5,593.1,873.1,975.5c168.6,352.3,192.7,523.9,192.7,1517.4v882.2l295-12.1C5259.3,4310.2,5382.7,4289.1,5455,4253z M2031.7,706.3c144.5-75.3,138.5-9,141.5-2276.1v-2146.7l-75.3-72.2c-72.3-75.3-72.3-75.3-707.5-75.3c-635.3,0-635.3,0-707.5,75.3l-75.3,72.2v2140.7c0,1457.2,9,2161.7,33.1,2200.9c18.1,33.1,60.2,72.3,96.3,87.3C839.5,754.4,1953.5,748.4,2031.7,706.3z"/></g></g>
		                  </svg>
		                  Like
		                </button>
		                <button type="button"
		                  className="flex flex-1 p-2 pr-2.5 items-center justify-center space-x-1.5 text-gray-500 hover:text-blue-500 bg-gray-100 active:scale-[1.05] rounded-md">
		                  <svg width="24" height="24"
		                    fill="currentColor" className="h-5"
		                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><defs></defs><title>comment</title><g id="comment-Regular"><path id="comment-Regular-2" data-name="comment-Regular" className="cls-1" d="M17,3.25H7A4.756,4.756,0,0,0,2.25,8V21a.75.75,0,0,0,1.28.53l2.414-2.414a1.246,1.246,0,0,1,.885-.366H17A4.756,4.756,0,0,0,21.75,14V8A4.756,4.756,0,0,0,17,3.25ZM20.25,14A3.254,3.254,0,0,1,17,17.25H6.829a2.73,2.73,0,0,0-1.945.806L3.75,19.189V8A3.254,3.254,0,0,1,7,4.75H17A3.254,3.254,0,0,1,20.25,8Z"/></g>
		                  </svg>
		                  Comment
		                </button>
		                <button type="button"
		                  className="flex flex-1 p-2 pr-2.5 items-center justify-center space-x-1.5 text-gray-500 hover:text-blue-500 bg-gray-100 active:scale-[1.05] rounded-md">
		                  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
		                    className="h-5" fill="currentColor">
		                    <rect id="Rectangle_3" data-name="Rectangle 3" width="24" height="24" fill="none"/>
		                    <path id="Rectangle" d="M12,4V0l8,7-8,7V10S0,9.069,0,14.737C0,3.4,12,4,12,4Z" transform="translate(2 5)" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.5"/>
		                  </svg>
		                  Share
		                </button>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
	)
}

export default Feed;
