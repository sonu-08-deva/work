import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Services {
  books = [
    { id: 1, name: 'SherLock Holmes', author: 'author', image: 'assets/images/Sherlock.jpeg' },
    { id: 2, name: 'Bright Edge', author: 'author', image: 'assets/images/BrightEdgeNovel.jpeg' },
    {
      id: 3,
      name: 'Losing The Plot',
      author: 'author',
      image: 'assets/images/LosingPlotNovel.jpeg',
    },
    { id: 4, name: 'One Day Life', author: 'author', image: 'assets/images/OneDayLifeNovel.jpeg' },
    { id: 5, name: 'The English', author: 'author', image: 'assets/images/TheEnglishNovel.jpeg' },
    { id: 6, name: 'Haunting Adeline', author: 'author', image: 'assets/images/HauntingNovel.jpg' },
  ];
  education = [
    {
      id: 7,
      name: 'Definition Of Education',
      author: 'author',
      image: 'assets/images/DefinitionOfEdu.jpeg',
    },
    {
      id: 8,
      name: 'Dumbing Us Down',
      author: 'author',
      image: 'assets/images/DumbingUsDownEdu.jpeg',
    },
    {
      id: 9,
      name: 'Employability Skills',
      author: 'author',
      image: 'assets/images/EmployabilitySkillsEdu.jpeg',
    },
    {
      id: 10,
      name: 'Nelson DeMille',
      author: 'author',
      image: 'assets/images/NelsonDeMilleEdu.jpeg',
    },
    {
      id: 11,
      name: 'Savitribai phule',
      author: 'author',
      image: 'assets/images/SavitribaiEdu.jpeg',
    },
    {
      id: 12,
      name: 'Wonderful Wizard',
      author: 'author',
      image: 'assets/images/WonderfulWizardEdu.jpeg',
    },
  ];

  thriller = [
    { id: 13, name: 'Thriller Story One', author: 'author', image: 'assets/images/thriller.jpeg' },
    {
      id: 14,
      name: 'Not Quite Dead Yet',
      author: 'author',
      image: 'assets/images/NotQuiteEeadYetThr.jpeg',
    },
    {
      id: 15,
      name: 'Beautiful Ugly',
      author: 'author',
      image: 'assets/images/BeautigulUglyThr.jpeg',
    },
    {
      id: 16,
      name: 'Silent Patient',
      author: 'author',
      image: 'assets/images/SilentPatientThr.jpeg',
    },
    {
      id: 17,
      name: 'The Girls In The Cabin',
      author: 'author',
      image: 'assets/images/CabinThr.jpeg',
    },
    { id: 18, name: 'The Only One Left', author: 'author', image: 'assets/images/the.jpeg' },
  ];

  historic = [
    { id: 19, name: 'Ancient Times', author: 'author', image: 'assets/images/AncientWorld.jpeg' },
    { id: 20, name: 'Historic', author: 'author', image: 'assets/images/Historic.jpeg' },
    {
      id: 21,
      name: 'Guns Germs And Steel',
      author: 'author',
      image: 'assets/images/GunsGerms.jpeg',
    },
    { id: 22, name: 'Nobel Ambition', author: 'author', image: 'assets/images/NobelAmbition.jpeg' },
    { id: 23, name: 'World', author: 'author', image: 'assets/images/WorldHis.jpeg' },
    {
      id: 24,
      name: 'History Of Aesthetic',
      author: 'author',
      image: 'assets/images/HistoryOfAesthetic.jpeg',
    },
  ];

  anime = [
    { id: 25, name: 'Anime', author: 'author', image: 'assets/images/anime.jpeg' },
    { id: 26, name: 'Dandadan', author: 'author', image: 'assets/images/DandadanAn.jpeg' },
    { id: 27, name: 'Demon Slayer', author: 'author', image: 'assets/images/DemonSlayerAn.jpeg' },
    {
      id: 28,
      name: 'How to Draw Anime',
      author: 'author',
      image: 'assets/images/HowToDraqAn.jpeg',
    },
    { id: 29, name: 'Shonen Hump', author: 'author', image: 'assets/images/ShonenJump.jpeg' },
    {
      id: 30,
      name: 'Vimpire Knight',
      author: 'author',
      image: 'assets/images/VampireKnightAn.jpeg',
    },
  ];

  mystery = [
    {
      id: 31,
      name: 'Books Of Die For',
      author: 'author',
      image: 'assets/images/BooksOfDieForMy.jpeg',
    },
    {
      id: 32,
      name: 'Dark Hill School',
      author: 'author',
      image: 'assets/images/DarkHillSchoolMy.jpeg',
    },
    { id: 33, name: 'Murder Mystry', author: 'author', image: 'assets/images/MurderMystry.jpeg' },
    { id: 34, name: 'Girl Who Lied', author: 'author', image: 'assets/images/GirlWhoLied.jpeg' },
    { id: 35, name: 'Midnight Black', author: 'author', image: 'assets/images/MidNightblack.jpeg' },
    {
      id: 36,
      name: 'The She Was Gone',
      author: 'author',
      image: 'assets/images/SheWasGoneMy.jpeg',
    },
  ];

  details: any = {
    1: {
      id: 1,
      price: '450 Rs',
      description: 'Sherlock Holmes is a detective novel...',
      aboutAuthor: 'Sir Arthur Conan Doyle, British writer...',
      reviews: ['Best mystery book!', 'Very well written.'],
    },
    2: {
      id: 2,
      price: '550 Rs',
      description: 'Bright Edge is an inspirational novel...',
      aboutAuthor: 'Written by a modern novelist...',
      reviews: ['Motivating story', 'Loved the flow!'],
    },
    3: {
      id: 3,
      price: '450 Rs',
      description: 'Sherlock Holmes is a detective novel...',
      aboutAuthor: 'Sir Arthur Conan Doyle, British writer...',
      reviews: ['Best mystery book!', 'Very well written.'],
    },
    4: {
      id: 4,
      price: '550 Rs',
      description: 'Bright Edge is an inspirational novel...',
      aboutAuthor: 'Written by a modern novelist...',
      reviews: ['Motivating story', 'Loved the flow!'],
    },
    5: {
      id: 5,
      price: '450 Rs',
      description: 'Sherlock Holmes is a detective novel...',
      aboutAuthor: 'Sir Arthur Conan Doyle, British writer...',
      reviews: ['Best mystery book!', 'Very well written.'],
    },
    6: {
      id: 6,
      price: '550 Rs',
      description: 'Bright Edge is an inspirational novel...',
      aboutAuthor: 'Written by a modern novelist...',
      reviews: ['Motivating story', 'Loved the flow!'],
    },
    7: {
      id: 6,
      price: '550 Rs',
      description: 'Bright Edge is an inspirational novel...',
      aboutAuthor: 'Written by a modern novelist...',
      reviews: ['Motivating story', 'Loved the flow!'],
    },
    8: {
      id: 6,
      price: '550 Rs',
      description: 'Bright Edge is an inspirational novel...',
      aboutAuthor: 'Written by a modern novelist...',
      reviews: ['Motivating story', 'Loved the flow!'],
    },
    9: {
      id: 6,
      price: '550 Rs',
      description: 'Bright Edge is an inspirational novel...',
      aboutAuthor: 'Written by a modern novelist...',
      reviews: ['Motivating story', 'Loved the flow!'],
    },
    10: {
      id: 6,
      price: '550 Rs',
      description: 'Bright Edge is an inspirational novel...',
      aboutAuthor: 'Written by a modern novelist...',
      reviews: ['Motivating story', 'Loved the flow!'],
    },
    11: {
      id: 6,
      price: '550 Rs',
      description: 'Bright Edge is an inspirational novel...',
      aboutAuthor: 'Written by a modern novelist...',
      reviews: ['Motivating story', 'Loved the flow!'],
    },
    12: {
      id: 6,
      price: '550 Rs',
      description: 'Bright Edge is an inspirational novel...',
      aboutAuthor: 'Written by a modern novelist...',
      reviews: ['Motivating story', 'Loved the flow!'],
    },
    13: {
      id: 6,
      price: '550 Rs',
      description: 'Bright Edge is an inspirational novel...',
      aboutAuthor: 'Written by a modern novelist...',
      reviews: ['Motivating story', 'Loved the flow!'],
    },
    14: {
      id: 6,
      price: '550 Rs',
      description: 'Bright Edge is an inspirational novel...',
      aboutAuthor: 'Written by a modern novelist...',
      reviews: ['Motivating story', 'Loved the flow!'],
    },
    15: {
      id: 6,
      price: '550 Rs',
      description: 'Bright Edge is an inspirational novel...',
      aboutAuthor: 'Written by a modern novelist...',
      reviews: ['Motivating story', 'Loved the flow!'],
    },
    16: {
      id: 6,
      price: '550 Rs',
      description: 'Bright Edge is an inspirational novel...',
      aboutAuthor: 'Written by a modern novelist...',
      reviews: ['Motivating story', 'Loved the flow!'],
    },
    17: {
      id: 6,
      price: '550 Rs',
      description: 'Bright Edge is an inspirational novel...',
      aboutAuthor: 'Written by a modern novelist...',
      reviews: ['Motivating story', 'Loved the flow!'],
    },
    18: {
      id: 6,
      price: '550 Rs',
      description: 'Bright Edge is an inspirational novel...',
      aboutAuthor: 'Written by a modern novelist...',
      reviews: ['Motivating story', 'Loved the flow!'],
    },
    19: {
      id: 6,
      price: '550 Rs',
      description: 'Bright Edge is an inspirational novel...',
      aboutAuthor: 'Written by a modern novelist...',
      reviews: ['Motivating story', 'Loved the flow!'],
    },
    20: {
      id: 6,
      price: '550 Rs',
      description: 'Bright Edge is an inspirational novel...',
      aboutAuthor: 'Written by a modern novelist...',
      reviews: ['Motivating story', 'Loved the flow!'],
    },
    21: {
      id: 6,
      price: '550 Rs',
      description: 'Bright Edge is an inspirational novel...',
      aboutAuthor: 'Written by a modern novelist...',
      reviews: ['Motivating story', 'Loved the flow!'],
    },
    22: {
      id: 6,
      price: '550 Rs',
      description: 'Bright Edge is an inspirational novel...',
      aboutAuthor: 'Written by a modern novelist...',
      reviews: ['Motivating story', 'Loved the flow!'],
    },
    23: {
      id: 6,
      price: '550 Rs',
      description: 'Bright Edge is an inspirational novel...',
      aboutAuthor: 'Written by a modern novelist...',
      reviews: ['Motivating story', 'Loved the flow!'],
    },
    24: {
      id: 6,
      price: '550 Rs',
      description: 'Bright Edge is an inspirational novel...',
      aboutAuthor: 'Written by a modern novelist...',
      reviews: ['Motivating story', 'Loved the flow!'],
    },
    25: {
      id: 6,
      price: '550 Rs',
      description: 'Bright Edge is an inspirational novel...',
      aboutAuthor: 'Written by a modern novelist...',
      reviews: ['Motivating story', 'Loved the flow!'],
    },
    26: {
      id: 6,
      price: '550 Rs',
      description: 'Bright Edge is an inspirational novel...',
      aboutAuthor: 'Written by a modern novelist...',
      reviews: ['Motivating story', 'Loved the flow!'],
    },
    27: {
      id: 6,
      price: '550 Rs',
      description: 'Bright Edge is an inspirational novel...',
      aboutAuthor: 'Written by a modern novelist...',
      reviews: ['Motivating story', 'Loved the flow!'],
    },
    28: {
      id: 6,
      price: '550 Rs',
      description: 'Bright Edge is an inspirational novel...',
      aboutAuthor: 'Written by a modern novelist...',
      reviews: ['Motivating story', 'Loved the flow!'],
    },
    29: {
      id: 6,
      price: '550 Rs',
      description: 'Bright Edge is an inspirational novel...',
      aboutAuthor: 'Written by a modern novelist...',
      reviews: ['Motivating story', 'Loved the flow!'],
    },
    30: {
      id: 6,
      price: '550 Rs',
      description: 'Bright Edge is an inspirational novel...',
      aboutAuthor: 'Written by a modern novelist...',
      reviews: ['Motivating story', 'Loved the flow!'],
    },
    31: {
      id: 6,
      price: '550 Rs',
      description: 'Bright Edge is an inspirational novel...',
      aboutAuthor: 'Written by a modern novelist...',
      reviews: ['Motivating story', 'Loved the flow!'],
    },
    32: {
      id: 6,
      price: '550 Rs',
      description: 'Bright Edge is an inspirational novel...',
      aboutAuthor: 'Written by a modern novelist...',
      reviews: ['Motivating story', 'Loved the flow!'],
    },
    33: {
      id: 6,
      price: '550 Rs',
      description: 'Bright Edge is an inspirational novel...',
      aboutAuthor: 'Written by a modern novelist...',
      reviews: ['Motivating story', 'Loved the flow!'],
    },
    34: {
      id: 6,
      price: '550 Rs',
      description: 'Bright Edge is an inspirational novel...',
      aboutAuthor: 'Written by a modern novelist...',
      reviews: ['Motivating story', 'Loved the flow!'],
    },
    35: {
      id: 6,
      price: '550 Rs',
      description: 'Bright Edge is an inspirational novel...',
      aboutAuthor: 'Written by a modern novelist...',
      reviews: ['Motivating story', 'Loved the flow!'],
    },
    36: {
      id: 6,
      price: '550 Rs',
      description: 'Bright Edge is an inspirational novel...',
      aboutAuthor: 'Written by a modern novelist...',
      reviews: ['Motivating story', 'Loved the flow!'],
    },
  };

  getBookById(id: number) {
    return (
      this.books.find((b) => b.id === id) ||
      this.education.find((e) => e.id === id) ||
      this.historic.find((h) => h.id === id) ||
      this.anime.find((a) => a.id === id) ||
      this.mystery.find((m) => m.id === id) ||
      this.thriller.find((t) => t.id === id)
    );
  }

  getDetails(id: number) {
    return this.details[id as any];
  }

  constructor(private http: HttpClient) {}
  apiurl: string = 'http://localhost:8000/api/user/';
  apiurl1: string = 'http://localhost:8000/api/payment/';
  apiurl2: string = 'http://localhost:8000/api/login/';

  user(userdata: any) {
    return this.http.post(this.apiurl, userdata);
  }

  payment(paymentdata: any) {
    return this.http.post(this.apiurl1, paymentdata);
  }

  login(data: any) {
    return this.http.post(this.apiurl2, data);
  }
}
