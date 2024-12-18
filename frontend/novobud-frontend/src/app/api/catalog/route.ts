import Property from '@/types/property';
import { NextResponse } from 'next/server'


// Init data
const properties = [
  {
    id: 1,
    type: 'Квартира',
    price: 45000,
    area: 45,
    location: 'Харків, Шевченківський район',
    address: 'пр. Перемоги, 75',
    rooms: 2,
    imgUrl: 'https://plus.unsplash.com/premium_photo-1661877303180-19a028c21048?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    description: '2 кімнатна квартира з ремонтом, технікою та меблями.',
  },
  {
    id: 2,
    type: 'Будинок',
    price: 120000,
    area: 150,
    location: 'Львів, Сихівський район',
    address: 'вулиця Сихівська, 12',
    rooms: 4,
    imgUrl: 'https://cdn.riastatic.com/photosnew/dom/photo/prodaja-dom-shkurintsi-blagodatnyy-massiv__309434639xl.jpg',
    description: 'Просторий будинок з садом у спокійному районі.',
  },
  {
    id: 3,
    type: 'Таунхаус',
    price: 85000,
    area: 95,
    location: 'Київ, Оболонський район',
    address: 'вулиця Героїв Дніпра, 22',
    rooms: 3,
    imgUrl: 'https://cdn.riastatic.com/photos/dom/photo/27821/2782165/278216501/278216501xl.webp',
    description: 'Сучасний таунхаус у новому житловому комплексі.',
  },
  {
    id: 4,
    type: 'Квартира',
    price: 55000,
    area: 55,
    location: 'Одеса, Приморський район',
    address: 'вулиця Дерибасівська, 14',
    rooms: 2,
    imgUrl: 'https://cdn.riastatic.com/photosnew/dom/photo/prodaja-kvartira-odesa-primorskyy-rayon__309434642xl.jpg',
    description: '2 кімнатна квартира з ремонтом, технікою та меблями.',
  },
  {
    id: 5,
    type: 'Будинок',
    price: 180000,
    area: 180,
    location: 'Вінниця, Центральний район',
    address: 'вулиця Київська, 23',
    rooms: 5,
    imgUrl: 'https://cdn.riastatic.com/photosnew/dom/photo/prodaja-dom-vinnica-tsentralnyy-rayon__309434643xl.jpg',
    description: 'Просторий будинок з садом у центральному районі.',
  },
  {
    id: 6,
    type: 'Таунхаус',
    price: 95000,
    area: 90,
    location: 'Дніпро, Новокодацький район',
    address: 'вулиця Павлоградська, 12',
    rooms: 3,
    imgUrl: 'https://cdn.riastatic.com/photos/dom/photo/27821/2782165/278216502/278216502xl.webp',
    description: 'Сучасний таунхаус у новому житловому комплексі.',
  },
] as Property[];

// Simulate API call
export async function GET(){
  return NextResponse.json({
    properties : properties
  })
}
