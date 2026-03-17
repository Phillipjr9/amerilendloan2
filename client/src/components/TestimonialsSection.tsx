import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { name: "Sarah M.", location: "Austin, TX", rating: 5, text: "AmeriLend saved me when I needed emergency car repairs. Applied online in the morning and had funds in my account by the afternoon!" },
  { name: "James T.", location: "Phoenix, AZ", rating: 5, text: "Best lending experience I've ever had. The whole process was straightforward, and funds were in my account within 24 hours!" },
  { name: "Maria G.", location: "Miami, FL", rating: 5, text: "I was worried about my credit score, but AmeriLend worked with me. The approval process was fast and the terms were clear from the start." },
  { name: "David R.", location: "Seattle, WA", rating: 5, text: "Fast, easy, and professional. Got the funds I needed for my medical bills the next day — completely hassle-free!" },
  { name: "Jennifer L.", location: "Chicago, IL", rating: 4, text: "The mobile app makes everything so convenient. I can manage my loan payments right from my phone. Wish they had weekend support hours though." },
  { name: "Michael P.", location: "Dallas, TX", rating: 5, text: "Excellent rates and flexible payment options. Everything was transparent from start to finish — no hidden costs at all." },
  { name: "Lisa K.", location: "Atlanta, GA", rating: 5, text: "Customer support is top-notch. They answered all my questions and walked me through every step of the process." },
  { name: "Robert H.", location: "Denver, CO", rating: 5, text: "I've used other lenders before, but AmeriLend is by far the best. Simple application, fast approval, and clear terms." },
  { name: "Amanda S.", location: "Portland, OR", rating: 4, text: "Got approved even with less than perfect credit. The interest rate was fair and funds arrived quickly. Would have liked more repayment term options." },
  { name: "Christopher B.", location: "Boston, MA", rating: 5, text: "Quick turnaround time and competitive rates. The entire experience was transparent and professional." },
  { name: "Patricia D.", location: "Las Vegas, NV", rating: 5, text: "The online application took 10 minutes and I had a decision within the hour. Money was in my account the next business day!" },
  { name: "Daniel W.", location: "San Diego, CA", rating: 5, text: "Professional, reliable, and trustworthy. The loan terms were exactly as promised — no surprises whatsoever." },
  { name: "Jessica F.", location: "Nashville, TN", rating: 5, text: "Great experience from start to finish. My loan officer was knowledgeable and made sure I understood everything clearly." },
  { name: "Thomas A.", location: "Charlotte, NC", rating: 5, text: "I needed funds urgently and AmeriLend delivered. Fast approval and same-day funding!" },
  { name: "Michelle C.", location: "Minneapolis, MN", rating: 5, text: "Very impressed with how smooth the process was. No unnecessary paperwork or delays." },
  { name: "Kevin J.", location: "Tampa, FL", rating: 5, text: "The interest rates are reasonable and the payment plans are flexible. Much better than what other lenders were offering me." },
  { name: "Rachel N.", location: "Philadelphia, PA", rating: 5, text: "AmeriLend treats you like a person, not just a number. Refreshing customer service!" },
  { name: "Brian M.", location: "San Antonio, TX", rating: 4, text: "Straightforward process with no surprises. Everything was exactly as promised. The app could use a few more features, but overall great." },
  { name: "Nicole V.", location: "Columbus, OH", rating: 5, text: "I was skeptical at first, but AmeriLend exceeded my expectations. Highly recommended!" },
  { name: "Steven E.", location: "Indianapolis, IN", rating: 5, text: "Great communication throughout the entire process. I always knew exactly where my application stood." },
  { name: "Kimberly R.", location: "Sacramento, CA", rating: 5, text: "The best part? No prepayment penalties! I was able to pay off my loan early without any extra fees." },
  { name: "Joseph L.", location: "Kansas City, MO", rating: 5, text: "Needed money for home repairs and AmeriLend came through. Simple application and fast funding!" },
  { name: "Angela W.", location: "Baltimore, MD", rating: 5, text: "Customer service team is incredibly helpful and friendly. They made everything stress-free." },
  { name: "Charles T.", location: "Milwaukee, WI", rating: 5, text: "I've recommended AmeriLend to all my friends. Best online lending platform I've ever used — fast, clear, and reliable." },
  { name: "Melissa H.", location: "Albuquerque, NM", rating: 5, text: "The transparency is what I appreciate most. Clear terms, fair rates, and no hidden charges whatsoever." },
  { name: "Richard K.", location: "Louisville, KY", rating: 5, text: "Got my loan approved despite having had financial troubles in the past. Very grateful!" },
  { name: "Laura P.", location: "Oklahoma City, OK", rating: 5, text: "Fast, efficient, and professional service. The approval was quick and terms were easy to understand." },
  { name: "Eric S.", location: "Raleigh, NC", rating: 4, text: "The mobile app is fantastic. Managing my loan has never been easier. Only wish the app had Face ID login." },
  { name: "Stephanie B.", location: "Memphis, TN", rating: 5, text: "AmeriLend helped me during a tough financial situation. Forever grateful for their support." },
  { name: "Gregory M.", location: "Richmond, VA", rating: 5, text: "Competitive rates and excellent customer service. What more could you ask for?" },
  { name: "Heather D.", location: "New Orleans, LA", rating: 5, text: "The approval process was incredibly quick. Had my funds within 24 hours!" },
  { name: "Andrew F.", location: "Salt Lake City, UT", rating: 5, text: "Very professional team and easy-to-understand loan terms. No confusion whatsoever." },
  { name: "Christina G.", location: "Birmingham, AL", rating: 5, text: "I was nervous about applying for a loan online, but AmeriLend made it so easy and secure." },
  { name: "Jason R.", location: "Rochester, NY", rating: 5, text: "Great experience! The whole process was seamless from application to funding." },
  { name: "Samantha L.", location: "Grand Rapids, MI", rating: 5, text: "AmeriLend gave me a second chance when other lenders turned me down. Truly appreciate it!" },
  { name: "Matthew W.", location: "Tucson, AZ", rating: 4, text: "Flexible payment options made it easy to fit the loan into my budget. Took a couple days for funds to arrive but overall great." },
  { name: "Elizabeth T.", location: "Fresno, CA", rating: 5, text: "The customer support team went above and beyond to help me. Excellent service!" },
  { name: "Ryan C.", location: "Mesa, AZ", rating: 5, text: "Quick approval, fair rates, and great customer service. Everything you need in a lender." },
  { name: "Rebecca N.", location: "Virginia Beach, VA", rating: 5, text: "I love how transparent they are about all fees and terms. No surprises at all!" },
  { name: "Justin H.", location: "Omaha, NE", rating: 5, text: "AmeriLend helped me consolidate my credit card debt. Now I'm on track to being debt-free!" },
  { name: "Katherine M.", location: "Colorado Springs, CO", rating: 5, text: "The application process was so simple, even my tech-challenged dad could do it!" },
  { name: "Brandon S.", location: "Arlington, TX", rating: 5, text: "Fast funding and reasonable terms. Exactly what I needed for my business expenses." },
  { name: "Vanessa P.", location: "Wichita, KS", rating: 5, text: "Outstanding service from start to finish. The team really knows what they're doing." },
  { name: "Timothy J.", location: "St. Louis, MO", rating: 5, text: "I was approved within minutes and had my money the same day. Incredible service!" },
  { name: "Brittany K.", location: "Santa Ana, CA", rating: 5, text: "AmeriLend is legit! No scams, no hidden fees, just honest lending." },
  { name: "Aaron D.", location: "Corpus Christi, TX", rating: 5, text: "The interest rates are very competitive. Saved me money compared to other lenders." },
  { name: "Danielle R.", location: "Lexington, KY", rating: 5, text: "Great for emergencies! Got approved quickly when I needed money for unexpected expenses." },
  { name: "Kenneth L.", location: "Henderson, NV", rating: 5, text: "Professional, courteous, and efficient. AmeriLend sets the standard for online lending." },
  { name: "Amber W.", location: "Plano, TX", rating: 5, text: "The process was painless and the funds arrived exactly when promised. A+ service!" },
  { name: "Derek M.", location: "Lincoln, NE", rating: 5, text: "I've used AmeriLend twice now and both times the experience was excellent." },
  { name: "Courtney F.", location: "Orlando, FL", rating: 5, text: "They worked with my budget to create a payment plan I could actually afford. So helpful!" },
  { name: "Travis B.", location: "Irvine, CA", rating: 5, text: "Best online loan experience ever. Fast, easy, and completely stress-free." },
  { name: "Allison H.", location: "Boise, ID", rating: 5, text: "AmeriLend treated me with respect and dignity. They really care about their customers." },
  { name: "Marcus G.", location: "Spokane, WA", rating: 5, text: "The transparency and honesty of this company is refreshing. Highly recommend!" },
  { name: "Tiffany S.", location: "Des Moines, IA", rating: 5, text: "Got my loan approved even though I'm self-employed. Very flexible and understanding!" },
];

export default function TestimonialsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const container = scrollContainerRef.current;
      
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust AmeriLend for their financial needs
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            onClick={() => scroll('left')}
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg hover:bg-gray-50 rounded-full w-12 h-12 hidden md:flex"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            onClick={() => scroll('right')}
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg hover:bg-gray-50 rounded-full w-12 h-12 hidden md:flex"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth hide-scrollbar px-4 md:px-12"
          >
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-[350px] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'fill-[#FFA500] text-[#FFA500]' : 'text-gray-300'}`} />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 mb-6 min-h-[100px] italic">
                    "{testimonial.text}"
                  </p>

                  {/* Customer Info */}
                  <div className="border-t pt-4">
                    <p className="font-semibold text-[#0A2540]">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile scroll hint */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            <Button
              onClick={() => scroll('left')}
              variant="outline"
              size="sm"
              className="rounded-full"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </Button>
            <Button
              onClick={() => scroll('right')}
              variant="outline"
              size="sm"
              className="rounded-full"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>


      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
