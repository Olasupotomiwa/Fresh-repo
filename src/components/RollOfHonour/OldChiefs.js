import Template1 from "./TableTemplate1";

const RollOfHonour = () => {
  const OldChiefsOBJ = [
 
  {
    id: 1,
    year: "1950/1951",
    name: "Olojede Nelson"
  },
  {
    id: 2,
    year: "1951/1952",
    name: "Banjo Solaru"
  },
  {
    id: 3,
    year: "1953/1954",
    name: "Fugene Odunje"
  },
  {
    id: 4,
    year: "1954/1955",
    name: "Agu Unoechi Ogan"
  },
  {
    id: 5,
    year: "1955/1956",
    name: "Benedict Obumelu"
  },
  {
    id: 6,
    year: "1956/1957",
    name: "RO. CEandinma"
  },
  {
    id: 7,
    year: "1957/1958",
    name: "CT Horsfall"
  },
  {
    id: 8,
    year: "1958/1959",
    name: "Willie Okunion"
  },
  {
    id: 9,
    year: "1959/1960",
    name: "Biyi Afonja"
  },
  {
    id: 10,
    year: "1960/1961",
    name: "Vincent E, Almak"
  },
  {
    id: 11,
    year: "1961/1962",
    name: "C.1. Obasola"
  },
  {
    id: 12,
    year: "1962/1963",
    name: "Ferguson Theme"
  },
  {
    id: 13,
    year: "1963/1964",
    name: "Femi Morakinyo"
  },
  {
    id: 14,
    year: "1964/1965",
    name: "Wale Dawdu"
  },
  {
    id: 15,
    year: "1965/1966",
    name: "Olu Ibelove"
  },
  {
    id: 16,
    year: "1966/1967",
    name: "Dele Osinasi"
  },
  {
    id: 17,
    year: "1967/1968",
    name: "Winston Dublin Green"
  },
  {
    id: 18,
    year: "1968/1969",
    name: "Victor Adebimpe"
  },
  {
    id: 19,
    year: "1969/1970",
    name: "Dayo Abatan"
  },
  {
    id: 20,
    year: "1970/1971",
    name: "Emmarmel Lawson"
  },
  {
    id: 21,
    year: "1971/1972",
    name: "Carey Andrew Jaja"
  },
  {
    id: 22,
    year: "1972/1973",
    name: "Sylvester Omeula"
  },
  {
    id: 23,
    year: "1973/1974",
    name: "Dan Ene"
  },
  {
    id: 24,
    year: "1974/1975",
    name: "Olufemi Abayade"
  },
   {
    id: 25,
    year: "1975/1976",
    name: "Martins Nwankwo"
  },
  {
    id: 26,
    year: "1976/1977",
    name: "Yemi Sodipo"
  },
  {
    id: 27,
    year: "1977/1978",
    name: "Leroy Chuma Edorien"
  },
  {
    id: 28,
    year: "1978/1979",
    name: "Henry Asemeta"
  },
  {
    id: 29,
    year: "1979/1980",
    name: "Tony lgwe"
  },
  {
    id: 30,
    year: "1980/1981",
    name: "Olalekan Owoyele"
  },
  {
    id: 31,
    year: "1981/1982",
    name: "katabosin Fayeofor"
  },
  {
    id: 32,
    year: "1982/1983",
    name: "Kola B. Afolayan-Oloye"
  },
  {
    id: 33,
    year: "1983/1984",
    name: "Opie Kingsley"
  },
  {
    id: 34,
    year: "1984/1985",
    name: "Okhah Michael"
  },
  {
    id: 35,
    year: "1985/1986",
    name: "Akpochafo 0. Frederick"
  },
  {
    id: 36,
    year: "1986/1987",
    name: "Bimbo Adegboye"
  },
  {
    id: 37,
    year: "1987/1988",
    name: "Ojogbo Augustine"
  },
  {
    id: 38,
    year: "1988/1989",
    name: "Akachokwa Onyema E"
  },
  {
    id: 39,
    year: "1989/1990",
    name: "Tunde Siyanbade"
  },
  {
    id: 40,
    year: "1990/1991",
    name: "Adesola Adesuntan"
  },
  {
    id: 41,
    year: "1991/1992",
    name: "Adekunle Akinlabi"
  },
  {
    id: 42,
    year: "1992/1993",
    name: "Lambe Abidemi"
  },
  {
    id: 43,
    year: "1993/1995",
    name: "Celestine Nnamani"
  },
  {
    id: 44,
    year: "1995/1997",
    name: "Kumbe Denis"
  },
  {
    id: 45,
    year: "1997/1998",
    name: "Adedeji Adelakuna"
  },
  {
    id: 46,
    year: "1998/1999",
    name: "Saheed Salau"
  },
  {
    id: 47,
    year: "1999/2000",
    name: "Segun Eleboda"
  },
  {
    id: 48,
    year: "2000/2001",
    name: "Adebanji Dada"
  },
    {
    id: 48,
    year: "2000/2001",
    name: "Adebanji Dada"
  },
  {
    id: 49,
    year: "2001/2002",
    name: "Abodande Olubunmi"
  },
  {
    id: 50,
    year: "2002/2003",
    name: "Kunle limob"
  },
  {
    id: 51,
    year: "2004/2005",
    name: "Ehima A. Emmanuel"
  },
  {
    id: 52,
    year: "2005/2006",
    name: "Felix Adesiyan"
  },
  {
    id: 53,
    year: "2006/2007",
    name: "Oluwaseun Oloruntimehin"
  },
  {
    id: 54,
    year: "2007/2008",
    name: "Oladimeji Oladipo"
  },
  {
    id: 55,
    year: "2008/2009",
    name: "Adebayo Muideen"
  },
  {
    id: 56,
    year: "2009/2010",
    name: "Banjoko Olaoluwa"
  },
  {
    id: 57,
    year: "2010/2011",
    name: "Nganya Kechukwu"
  },
  {
    id: 58,
    year: "2011/2012",
    name: "Shuaib Abdulrasheed"
  },
  {
    id: 59,
    year: "2012/2013",
    name: "Steph Adekunle"
  },
  {
    id: 60,
    year: "2013/2014",
    name: "Peter Dingho"
  },
  {
    id: 61,
    year: "2014/2015",
    name: "Damilola Oyehayo"
  },
  {
    id: 62,
    year: "2015/2016",
    name: "Kolawole Olawole"
  },
  {
    id: 63,
    year: "2016/2017",
    name: "Pahal Chlordum"
  },
  {
    id: 64,
    year: "2017/2018",
    name: "Valentine Igboockwu"
  },
  {
    id: 65,
    year: "2018/2019",
    name: "Olumuyiwa Oyetunde"
  },
  {
    id: 66,
    year: "2020/2021",
    name: "Ibrahim Olanrewaju"
  },
   {
    id: 67,
    year: "2020/2021",
    name: "Ibrahim Olanrewaju"
  }


  


  ];

  return (
    <div>
      <Template1 data={OldChiefsOBJ} />
    </div>
  );
};
export default RollOfHonour;
