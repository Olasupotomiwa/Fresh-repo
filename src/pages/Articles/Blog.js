import { Container } from "@chakra-ui/react";
import ArticleCard from "./ArticleCard";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import image1 from "../../assets/logo.jpg";
import image2 from "../../assets/logo.jpg";
import image3 from "../../assets/logo.jpg";
import image4 from "../../assets/logo.jpg";

const ArticleArray = [
  {
    id: 1,
    Time: "10:15 AM",
    Date: "11-06-2023",
    title: "Havana Musical Carnival",
    article:
      "As part of social engagement in the society, Sigma Club organizes ‘Havana Musical Carnival’ known as the West Africa’s greatest musical carnival which effectively promotes “town and gown” interaction in Nigeria. This is one of a kind social event that has written a lot of history in lives of many and put an everlasting story in the mouth of many in and out of the country. The major objective of the carnival is to create an active social gathering for the University community, Oyo State and generate income for the purpose of the philanthropic activities. The carnival has witnessed several musicians as at their prime to perform on the carnival stage. Among these musicians includes: Fela Anikulapo Kuti, Evangelist Ebenezer Obey, King Sanni Ade, Late Victor Uwaifo, Kollington, Olamide, 9ice, Obesere, among others. Among these musicians, King Sunny Ade was crowned the Grande Patron of Havana.",
    image: image1,
  },
  {
    id: 2,
    Time: "10:15 AM",
    Date: "11-06-2023",
    title: "SIGMA FOUNDATION",
    article:
      "This is a foundation of the club that was created in order to contribute more meaningfully and strategically to philanthropy, thus it is the institutional philanthropy organ of the club. It monitors several philanthropic activities of the club and establish more philanthropic act in order to reach vast numbers of the society with our philanthropic gestures. The objective of the Sigma Foundation includes the provision of modern facilities in tertiary institutions, awards of scholarship and the coordination of endowed chairs, provide educational opportunities and others. Currently, the foundation has instituted professorial chairs at the Faculty of Law, University of Ibadan and the Lagos Business School of the Pan-Atlantic University, Lagos.  The foundation is chaired by Honorary Sigmite Professor Ogunmola, the Chancellor, Lead City University, Ibadan, and have members like; Dr. Okon Onyung, the President, Ship Owners Association, Dr. Femi Oyamakin, Senior Lecturer, University of Ibadan, Ibadan, among others.  ",
    image: image2,
  },
  {
    id: 3,
    Time: "10:15 AM",
    Date: "11-06-2023",
    title: "Sigma Public Lecture",
    article:
      "In recent years, Sigma Club began the practice of inviting eminent personalities in the Nigerian State, to give intellectually stimulating lectures on burning issues in the Nation. As we speak, 10 public lectures have been organized by the club. The lectures, which are usually on topics of particular interest to youths and the development of the nation and Africa, have been delivered by different eminent personalities such as: Honorary Sigmite Prof. Gabriel Ogunmola (FAS, Past President, Nigerian Academy of Science), Prof. Pat Utomi (Lagos Business School), Old Sigmite Prof. Babatunde Osotimehin (Former Minister of Health), Senator Otunba Gbenga Daniel (Former Governor of Ogun State), Mr. Tayo Aderinokun (MD/CEO Guaranty Trust Bank Plc), Old Sigmite Dr. Adesoala Adeduntan (GMD First Bank Nigeria Ltd), Professor Biodun Jeyifo (Harvard University), Honorary Sigmite Prof. Ayo Banjo FAS (former Vice Chancellor, University of Ibadan, Professor Yemi Osinbajo (SAN, GCON, Vice President of the Federal Republic of Nigeria).The club also have other social activities which includes; Sigma Member’s Nite and Sigma Cocktail Party, amongst others.",
    image: image3,
  },
  {
    id: 4,
    Time: "10:15 AM",
    Date: "11-06-2023",
    title: "Sigma Guest Luncheon",
    article:
      "Over the years now, Sigma Club has inducted several important personalities into the Sigma Honorary Roll of Honor. The club introduces these important personalities, who are of outstanding personalities and have positively impacted the society, into the club through the Sigma Guest Luncheon. It is a classy but educative gathering of first class personalities of the country. Due to the kind of event it is, attendance is only by invitation. It will interest you to know that the most recent inductee is the Obi of Onitsha, His Royal Majesty, Alfred Nnaemeka Achebe, CFR.Among other recipients of this high honour include: Late Alhaji Dr.Ado Abdullahi Bayero(CFR), Late Dr.Taslim Elias, QC, (GCON, former president of the World Court), Late Dr.Alex Ekwueme(GCON, former Vice President of the Federal Republic of Nigeria), Dr.Christopher Kolade(CON, Nigeria’s former High Commissioner to the United Kingdom), Otunba Olasubomi Balogun(CON, founder FCMB Group), Professor Isaac Adewole(FAS, Nigeria’s immediate past Minister for Health), Professor Babatunde Gabriel Ogunmola(FAS, FAMedS(emeritus), Past President Academy of Science and the Chancellor, Lead City University, Ibadan), Chief Afe Babalola(SAN, CON), Chief Felix Ohiwerei(OFR, former Chairman of Nigerian Breweries), His Royal Highness Alhaji Mohammadu Sanusi II(CON) among others.",
    image: image4,
  },
];
export { ArticleArray };

const Blog = () => {
  return (
    <>
      <Header />
      <Container maxW="container.xlg" m="auto" p={10}>
        {ArticleArray.map(({ image, title, article, id, Date, Time }) => (
          <ArticleCard
            image={image}
            title={title}
            article={article}
            id={id}
            Date={Date}
            Time={Time}
          />
        ))}
      </Container>

      <Footer />
    </>
  );
};
export default Blog;
