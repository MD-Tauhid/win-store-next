export default function Footer() {
  return (
    <footer className="bg-[#3a3a3a] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo + Contact */}
        <div>
          <img
            src="/images/win-store.png"
            alt="Winstore Logo"
            className="w-32 mb-4"
          />

          <p className="text-teal-300 font-semibold mb-2">
            Got questions? Call us 24/7!
          </p>

          <p className="text-sm leading-relaxed">
            03 111 666 144 <br />
            0317 1777015
          </p>

          <p className="mt-4 text-teal-300 font-semibold">Contact Info</p>
          <p className="text-sm mb-4">info@winstore.pk</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-3">
            <a href="#"><img src="/icons/facebook.png" alt="facebook" className="h-4 w-4" /></a>
            <a href="#"><img src="/icons/twitter.png" alt="twitter" className="h-4 w-4" /></a>
            <a href="#"><img src="/icons/linkedin.png" alt="linkedin" className="h-4 w-4" /></a>
            <a href="#"><img src="/icons/instagram.png" alt="instagram" className="h-4 w-4" /></a>
          </div>
        </div>

        {/* Trending */}
        <div>
          <h3 className="text-teal-300 font-semibold mb-4">Trending</h3>
          <ul className="space-y-2 text-sm">
            <li>Installments</li>
            <li>Electronics</li>
            <li>Grocery</li>
            <li>Health & Beauty</li>
            <li>Home Appliances</li>
            <li>Mobile Accessories</li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-teal-300 font-semibold mb-4">Information</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Shipping & Return</li>
            <li>Privacy policy</li>
            <li>Terms & Conditions</li>
          </ul>

          <div className="flex gap-3 mt-5">
            <img src="/images/visa.png" className="h-12" />
            <img src="/images/master-card.png" className="h-12" />
            <img src="/images/COD.png" className="h-12" />
            <img src="/images/EIP.png" className="h-12" />
          </div>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="text-teal-300 font-semibold mb-4">Customer Care</h3>
          <ul className="space-y-2 text-sm">
            <li>My Account</li>
            <li>Track Your Order</li>
            <li>Recently Viewed</li>
            <li>Wishlist</li>
            <li>Compare</li>
            <li>Become a Vendor</li>
          </ul>
        </div>
      </div>

      <div className="bg-[#1f1f1f] py-4 text-center text-sm text-gray-300">
        © 2021 Winstore. All Rights Reserved.
      </div>
    </footer>
  );
}
