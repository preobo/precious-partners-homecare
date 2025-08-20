document.addEventListener("DOMContentLoaded", () => {
    const faqData = [
      {
        question: "What types of home care services do you provide?",
        answer: "We offer a wide range of compassionate home care services including personal hygiene assistance, medication reminders, meal preparation, light housekeeping, companionship, and specialized care for chronic illnesses. Our goal is to support your loved one’s independence while ensuring their comfort and safety in their own home."
      },
      {
        question: "How do I get started with Precious Partners Homecare?",
        answer: "Getting started is easy! Simply contact us to schedule a free in-home assessment. During this visit, one of our care coordinators will evaluate your loved one’s needs, discuss preferences, and develop a personalized care plan. From there, we match you with the best caregivers and coordinate scheduling."
      },
      {
        question: "Are your caregivers qualified and trustworthy?",
        answer: "Yes! All our caregivers undergo thorough background checks, drug screenings, and extensive training. We hire only compassionate, experienced professionals who are certified in first aid and CPR. Our team regularly completes ongoing education to stay up-to-date on best care practices."
      },
      {
        question: "What are your operating hours? Do you offer overnight or weekend care?",
        answer: "We provide flexible care services 24 hours a day, 7 days a week—including overnight and weekends. Whether your loved one needs a few hours of daily help or around-the-clock support, we can create a schedule that fits your family’s lifestyle."
      },
      {
        question: "How do you protect my loved one’s privacy and personal information?",
        answer: "Protecting your family’s privacy is a top priority. We comply fully with HIPAA regulations to safeguard all health and personal information. Our caregivers are trained to handle data securely, and we use encrypted systems to store records. You can trust that your information is safe with us."
      }
    ];
  
    const faqContainer = document.querySelector('.faq-container');
  
    faqData.map(function(item) {
        let article = document.createElement('article');
        article.className = ('faq-item');
  
        const markup = `
        <div class="item-question">
          <span class="question-text">${item.question}</span>
          <span class="arrows-container">
            <span class="expand">▽</span>
            <span class="close">△</span>
          </span>
        </div>
        <div class="item-answer">
          <span class="answer-text">${item.answer}</span>
        </div>
      `;
      
      article.innerHTML = markup;
      faqContainer.append(article);
    });
  

  
  const arrowsContainer = document.querySelectorAll('.arrows-container');

  arrowsContainer.forEach(function(item) {
    item.addEventListener('click', function(e) {
        const parent = e.currentTarget.parentElement.parentElement;
        parent.classList.toggle('show-answer');
    });
  });
});