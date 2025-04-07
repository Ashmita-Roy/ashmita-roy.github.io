/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Current-best Particle Swarm Optimization",
    authors:
      "Ashmita Roy Medha, Saroj Kr. Biswas, Muskan Gupta, Arpita Nath Boruah, Rahul Kumar, Vivek Verma, Biswajit Purkayastha",
    conferences:
      "2022 IEEE Conference on Interdisciplinary Approaches in Technology and Management for Social Innovation (IATMSI)",
    researchYr: 2022,
    citebox: "popup1",
    image: "assets/images/research-page/inteferenceNetwork.png",
    citation: {
      vancouver:
        "A. R. Medha et al., 'Current-best Particle Swarm Optimization', 2022 IEEE Conference on Interdisciplinary Approaches in Technology and Management for Social Innovation (IATMSI), Gwalior, India, 2022, pp. 1-6, doi: 10.1109/IATMSI56455.2022.10119383.",
    },
    abstract:
      "Particle Swarm Optimization (PSO) is a metaheuristic optimization method based on swarm intelligence. Due to its flexibility and ability to produce optimum performance, it is commonly used in various applications. While PSO has been used extensively to provide solutions to various complicated problems in engineering, it has also many deficiencies. Several improved PSO techniques have been proposed to compensate these deficiencies. However, there are still some scopes of improvement in its components. In this work, we have proposed an improvised PSO called Current-best Particle Swarm Optimization (CPSO) which introduces a new parameter called “cbest” that has been used in the social component of PSO to overcome the local minima issue. The suggested model, CPSO, has differentiate with the basic PSO method and the Iterative (ibest) PSO method using some optimization functions. The findings indicate that the recommended model outperforms the other models.",
    absbox: "absPopup1",
  },

  {
    title: "A Synthetic Hybrid Approach for Class Imbalance",
    authors:
      "Ashmita Roy Medha, Mayur Raj Bharati, Pranita Baro, Malaya Dutta Borah",
    conferences:
      " 2022 IEEE Silchar Subsection Conference (SILCON)",
    researchYr: 2022,
    citebox: "popup2",
    image: "assets/images/research-page/thumblinedata.png",
    citation: {
      vancouver:
        "A. R. Medha, M. R. Bharati, P. Baro and M. D. Borah, 'A Synthetic Hybrid Approach for Class Imbalance,' 2022 IEEE Silchar Subsection Conference (SILCON), Silchar, India, 2022, pp. 1-7, doi: 10.1109/SILCON55242.2022.10028811.",
    },
    abstract:
      "One of the significant challenges in Data Mining and Machine Learning is class imbalance during data processing. It refers to the situation when the samples belonging to one particular class in a dataset are much more than the samples of other classes. It causes misclassification chaos and lessens the performance of the algorithms to build real-world applications. As a result, any models that are trained on an imbalanced dataset are likely to be biased. In this paper, we have reported a hybrid approach where, we have generated a synthetic dataset based on the original dataset and merged the datasets to make a master dataset. The main objective is to leverage accuracy and improve model performance. The effectiveness of our work are shown in the terms of precision, recall and accuracy. Better results have been achieved in contrast to using the original dataset.",
    absbox: "absPopup2",
  },


  {
    title:
      "6G Communication: A Vision on Deep Learning in URLLC",
    authors:
      "Ashmita Roy Medha, Muskan Gupta, Sabuzima Nayak, Ripon Patgiri",
    conferences:
      "Smart Innovation, Systems and Technologies ((SIST,volume 292)",
    researchYr: 2022,
    citebox: "popup4",
    image: "assets/images/research-page/dialogueState.png",
    citation: {
      vancouver:
        "Roy Medha, A., Gupta, M., Nayak, S., Patgiri, R. (2022). 6G Communication: A Vision on Deep Learning in URLLC. In: Das, B., Patgiri, R., Bandyopadhyay, S., Balas, V.E. (eds) Modeling, Simulation and Optimization. Smart Innovation, Systems and Technologies, vol 292. Springer, Singapore. https://doi.org/10.1007/978-981-19-0836-1_45",
    },
    abstract:
      "Currently, the focus of wireless science is gradually moving toward 6G communication technology. The goals of 6G are high; however, it is a necessity to make many applications a reality. This paper analyzes the required suggested targets that must be taken to establish the 6G network effectively and efficiently. In addition, the paper also presents some future applications that will use 6G. The rapid advances in artificial intelligence and machine learning will significantly help the 6G to achieve its goal. 6G will integrate artificial intelligence in its every component to transfer the automation from smart to intelligence. One such aspect is using deep learning to achieve Ultra-Reliable and Low-Latency Communication (URLLC) in 6G. This paper has elaborated on the role of deep learning to achieve URLLC.",
    absbox: "absPopup4",
  },

  {
    title: "States Categorization in India Based on Health Security Capacity with Machine Learning Technique",
    authors: "Ashmita Roy Medha, Malaya Dutta Borah, Zakir Hussain ",
    conferences:
      " Lecture Notes in Electrical Engineering ((LNEE,volume 783))",
    researchYr: 2021,
    citebox: "popup5",
    image: "assets/images/research-page/semanticSegmentation.png",
    citation: {
      vancouver:
        "Medha, A.R., Borah, M.D., Hussain, Z. (2022). States Categorization in India Based on Health Security Capacity with Machine Learning Technique. In: Kumar, A., Senatore, S., Gunjan, V.K. (eds) ICDSMLA 2020. Lecture Notes in Electrical Engineering, vol 783. Springer, Singapore. https://doi.org/10.1007/978-981-16-3690-5_36",
    },
    abstract:
      "The rising pandemic, COVID-19, has horrendously shaken the entire world, especially India by indicating an enormous number of deaths, affected cases, and a moderate degree of relieved cases. To fight against the infectious disease, WHO (World Health Organization) has proposed for the intermediate direction of essential health parameters. It is important to comprehend the status of health affairs of each state individually with the goal that obligatory advances can be taken to prevent the deadly ailment in India. In this work, we have introduced a few points of healthcare parameters for each state in India and furthermore demonstrated the degrees of each state on the basis of health measures and arranged them by using the Machine Learning Technique, K-Means Clustering Algorithm. The states are grouped into six categories and the process of measuring the number of clustered groups is done by Elbow Method. These states are presented by scatter-plot graphs based on various health boundaries. The states can be compared by the clustered points, knowing the position at which cluster a particular state belongs to and what is the status of that state according to the health parameters. Altogether, the study will be a controlling uplifting record for the health movement activists everywhere throughout the nation to limit the harm for the current pandemic and for working up a mainstream development to acknowledge health as a primary right for the citizens of India.",
    absbox: "absPopup5",
  },

];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
