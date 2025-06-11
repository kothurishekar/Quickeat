import React from "react";
import Illustration from '../assets/Illustration.png'
import Illustration2 from '../assets/Illustration2.png'
import Illustration3 from '../assets/Illustration3.png'

function How() {
  return (
    <div>
      <div className="container my-10 sm:my-16 md:my-20 w-full">
        <div className="text-center max-w-3xl mx-auto px-4">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#363636]">
            How It Works
          </h1>
          <p className="text-sm sm:text-base md:text-[20px] text-gray-400 mt-2">
            Magna sit amet purus gravida quis blandit turpis cursus. Venenatis
            tellus in metus vulputate eu scelerisque felis.
          </p>
        </div>

        <div className="container flex flex-col sm:flex-row justify-around gap-6 sm:gap-8 md:gap-10 px-4 py-6 md:py-10 mx-auto">
          {/* Step 1 */}
          <div className="w-full sm:w-1/3 px-2">
            <img src={Illustration} alt="img1" className="mx-auto w-3/5 sm:w-full max-w-xs" />
            <h1 className="text-center text-xl sm:text-2xl font-bold text-[#363636] mt-3 sm:mt-4">
              <span className="text-gray-400">01</span> Select Restaurant
            </h1>
            <p className="text-center text-sm sm:text-base text-gray-500 mt-2">
              Non enim praesent elementum facilisis leo vel fringilla. Lectus proin nibh nisl condimentum id. Quis varius quam quisque id diam vel.
            </p>
          </div>

          {/* Step 2 */}
          <div className="w-full sm:w-1/3 px-2">
            <img src={Illustration2} alt="img2" className="mx-auto w-3/5 sm:w-full max-w-xs" />
            <h1 className="text-center text-xl sm:text-2xl font-bold text-[#363636] mt-3 sm:mt-4">
              <span className="text-gray-400">02</span> Select menu
            </h1>
            <p className="text-center text-sm sm:text-base text-gray-500 mt-2">
              Amet consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis lectus magna.
            </p>
          </div>

          {/* Step 3 */}
          <div className="w-full sm:w-1/3 px-2">
            <img src={Illustration3} alt="img3" className="mx-auto w-3/5 sm:w-full max-w-xs" />
            <h1 className="text-center text-xl sm:text-2xl font-bold text-[#363636] mt-3 sm:mt-4">
              <span className="text-gray-400">03</span> Wait for delivery
            </h1>
            <p className="text-center text-sm sm:text-base text-gray-500 mt-2">
              Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. At tempor commodo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default How;
