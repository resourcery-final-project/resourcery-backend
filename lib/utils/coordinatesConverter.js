const NodeGeocoder = require('node-geocoder');
const Resource = require('../models/Resource');

const resources = [
  {
    title: 'St. Vincent de Paul Clackamas Co.',
    address: '297 NW Broadway St. Estacada, OR 97023',
    phone: 'Main Line: 503-630-2416',
    description: 'Free lunches.',
    hours: 'Hours: 11 a.m.-1 p.m. First and third Thurs.',
    type: 'Ready To Eat',
  },
  {
    title: 'The Canby Center',
    address: '681 SW Second Ave. Canby, OR',
    phone: 'Main Line: 503-266-2920',
    description: 'Free hot lunch.',
    hours: 'Hours: 11 a.m.-1 p.m. Mon.-Thurs.',
    type: 'Ready To Eat',
  },
  {
    title: 'Trinity Episcopal Cathedral',
    address: '147 NW 19th Ave. Portland, OR 97209',
    phone: 'Main Line: 503-478-1210',
    description: 'Hot community meal hours: 11 a.m.-1 p.m. Wed.',
    hours: 'Hot community meal hours: 11 a.m.-1 p.m. Wed.',
    type: 'Ready To Eat',
  },
  {
    title: 'Union Gospel Mission',
    address: '3 NW Third Ave. Portland, OR 97209',
    phone: 'Main Line: 503-274-4483',
    description:
      'Sack lunches: 7 a.m. Mon., Tues., Thurs. Clothing (upon availability) hours: 4-5 p.m. Tues.- Fri. Hot lunch, snacks, other services hours: 10-11:30 a.m. Tues.-Thurs., 10-11:15 a.m. Fri., 2-3:45 p.m. Tues.-Sat. Chapel and hot dinner hours: 7:10-8:30 p.m. Tues.-Fri. Breakfast hours: 6:30 a.m. Wed., Fri. Snacks and services hours: 2-4 p.m. Sat. Thanksgiving day dinner: 10 a.m.-1 p.m.',
    hours:
      'Sack lunches: 7 a.m. Mon., Tues., Thurs. Clothing (upon availability) hours: 4-5 p.m. Tues.- Fri. Hot lunch, snacks, other services hours: 10-11:30 a.m. Tues.-Thurs., 10-11:15 a.m. Fri., 2-3:45 p.m. Tues.-Sat. Chapel and hot dinner hours: 7:10-8:30 p.m. Tues.-Fri. Breakfast hours: 6:30 a.m. Wed., Fri. Snacks and services hours: 2-4 p.m. Sat. Thanksgiving day dinner: 10 a.m.-1 p.m.',
    type: 'Ready To Eat',
  },
  {
    title: 'Women of Wisdom',
    address: '12550 SW Second St. Beaverton, OR 97005',
    phone: 'Main Line: 503-846-3555',
    description:
      'Provides monthly healthy food benefits, growth monitoring and referral to other programs for pregnant and post-partum women, infants and children up to age 5.',
    hours:
      'Phone hours: 8:30- 11:50 a.m., 1-6:30 p.m. Mon.; 8:30-11:50 a.m., 1-4:30 p.m. Tues.-Thurs.',
    type: 'Ready To Eat',
  },
  {
    title: 'Women of Wisdom',
    address: '7360 SW Hunziker St. Tigard, OR 97223',
    phone: 'Main Line: 503-846-3555',
    description:
      'Provides monthly healthy food benefits, growth monitoring and referral to other programs for pregnant and post-partum women, infants and children up to age 5.',
    hours:
      'Phone hours: 8:30- 11:50 a.m., 1-6:30 p.m. Mon.; 8:30-11:50 a.m., 1-4:30 p.m. Tues.-Thurs.',
    type: 'Ready To Eat',
  },
  {
    title: 'Women of Wisdom',
    address: '254 N First Ave Hillsboro, OR 97124',
    phone: 'Main Line: 503-846-3555',
    description:
      'Provides monthly healthy food benefits, growth monitoring and referral to other programs for pregnant and post-partum women, infants and children up to age 5.',
    hours:
      'Phone hours: 8:30- 11:50 a.m., 1-6:30 p.m. Mon.; 8:30-11:50 a.m., 1-4:30 p.m. Tues.-Thurs.',
    type: 'Ready To Eat',
  },
  {
    title: 'Zarephath Ministries',
    address:
      '59 NW Ava Ave. (enter through parking lot door) Gresham, OR 97030',
    phone: 'Main Line: 503-667-2692',
    description: 'CLOSED',
    hours: 'CLOSED',
    type: 'Ready To Eat',
  },
  {
    title: 'Zarephath Pantry',
    address: '190 SW Third Ave. Canby, OR 97013',
    phone: 'Contact: 503-266-4061',
    description: 'Meals. Pick up boxed meals 5-6:30 p.m. Tues.',
    hours: 'Hours: 5-6:30 p.m. Tues.',
    type: 'Ready To Eat',
  },
  {
    title: 'Allen Temple Emergency Aid Center',
    address: '4214 NE Eighth Ave. Portland, OR 97211 ',
    phone: 'Main Line: 503-289-6615',
    description:
      'Food boxes. Service area from NE Broadway to N Lombard and NE 42nd to N Greeley.',
    hours:
      'Hours: 5-7 p.m. Tues.; 11 a.m.-2 p.m. Wed., Sat. Closed 1st & 2nd Tues., 1st Wed., 1st Sat.',
    type: 'Food Box',
  },
  {
    title: 'Beaverton Seventh-Day Adventist',
    address: '14645 SW Davis Rd. Beaverton, OR 97007 ',
    phone: '',
    description: 'Food boxes.',
    hours: 'CLOSED',
    type: 'Food Box',
  },
  {
    title: 'Bethel Congregation United Church of Christ',
    address: '5150 SW Watson Ave. Beaverton, OR 97005 ',
    phone: 'Main Line: 503-591-9025',
    description:
      'Food pantry for low income Beaverton residents. Register with Care to Share (503) 591-9025.',
    hours:
      'Hours: 11:30 a.m.-12:30 p.m. Mon., Thurs.; 6:30-7:30 p.m. Wed. Emergency food bags available 9 a.m.-3 p.m. Mon.-Thurs.',
    type: 'Food Box',
  },
  {
    title: 'Cascade Vineyard Church Food Pantry',
    address:
      '14460 SW 114th Ave. (house behind Christ the King Lutheran Church) Tigard, OR 97224 ',
    phone: 'Main Line: 503-684-8225',
    description: 'Food pantry. Lottery system.',
    hours: 'Hours: Noon-3 p.m. Thurs.',
    type: 'Food Box',
  },
  {
    title: 'Church of the Nazarene',
    address: '716 Taylor St Oregon City, OR 97045 ',
    phone: 'Main Line: 503-656-6536',
    description: 'Food Pantry.',
    hours: 'Hours: 6:30-8:30 p.m. Mon.',
    type: 'Food Box',
  },
  {
    title: 'Colton Helping Hands',
    address: '30138 S. Wall St. Colton, OR 97017 ',
    phone: 'Main Line: 503-829-5679',
    description: 'Food Pantry.',
    hours:
      'Hours: 11 a.m.-3 p.m. Tues. Fourth Mon. of every month, free food for all. Hours: 10 a.m.-1 p.m.',
    type: 'Food Box',
  },
  {
    title: 'Columbia Pacific Food Bank',
    address: '627 Adams Ave. Vernonia, OR 97064 ',
    phone: 'Main Line: 503-429-1414',
    description:
      'Emergency food boxes provide 3-day supply of groceries per month for low-income residents of Vernonia, Timber, Manning and Buxton.',
    hours: 'Hours: 10 a.m.-2 p.m. Tues., Thurs.',
    type: 'Food Box',
  },
  {
    title: 'Cornelius UMC Community Table Food Pantry',
    address: '1095 S Beech Ave. Cornelius, OR 97113 ',
    phone: 'Contact: 503-724-9766',
    description:
      'Emergency food boxes. Walk-ins welcome. May call for urgent appointments. English/ Spanish.',
    hours:
      'Pantry and clothes closet hours: 1-3 p.m. 1st Wed., 10 a.m.-noon 3rd Sat., 4:30-7 p.m. Mon. in May, June, July only.Hours: 1:00-3:00 first Wed. only; call first',
    type: 'Food Box',
  },
  {
    title: 'Ecumenical Ministries of Oregon Northeast Emergency Food Program',
    address: '4800 NE 72nd Ave. (Luther Memorial) Portland, OR 97218 ',
    phone: 'Main Line: 503-284-5470',
    description:
      'Emergency food boxes and clothing. Three times every six months. If no car, bring bag or cart. Lottery system starts at 1 p.m. No geographic boundaries. Provide verification for all members of household. Drive-through pickup Clothing services suspended',
    hours: 'Hours: 1-3 p.m. Tues., Thurs., Sat.',
    type: 'Food Box',
  },
  {
    title: 'Estacada Area Food Bank',
    address: '272 S. Broadway St. Estacada, OR 97023 ',
    phone: 'Main Line: 503-630-2888',
    description: 'Food Pantry.',
    hours: 'Hours: 10-11:45 a.m., 12:30-3:45 p.m. Tues., Fri.',
    type: 'Food Box',
  },
  {
    title: 'Estacada School District Community Pantry',
    address: '301 NE 2nd Estacada, OR 97023 ',
    phone: 'Main Line: 503-630-2888',
    description:
      'Pantry open to all households with a student enrolled in the school district. Located at Clackamas River Elementary School.',
    hours: 'Hours: 1-4 p.m. Wed. during school year. Summer hours',
    type: 'Food Box',
  },
  {
    title: 'Faith Cafe',
    address: '10390 SW Canyon Rd. Beaverton , OR 97005 ',
    phone: '',
    description:
      'The St. Mathews Lunch Program will be modified as follow: The meal will be a brown bag to go. Guests may come in to use the restroom facilities but are to pick up their lunch and exit the building.',
    hours: 'Hours: 11:30 a.m.-12:30 p.m. Sat.',
    type: 'Food Box',
  },
  {
    title: 'First Baptist Church Oregon City',
    address: '819 John Adams St. Oregon City, OR 97045 ',
    phone: 'Main Line: 503-656-3854',
    description: 'Food pantry.',
    hours: 'Hours: 1 p.m.-4 p.m. Fri.',
    type: 'Food Box',
  },
  {
    title: 'First Presbyterian Church',
    address: '1321 Linn Ave Oregon City, OR 97045 ',
    phone: 'Main Line: 503-656-7444',
    description: 'Food Pantry.',
    hours: 'Hours: 1-4 p.m. Tues.',
    type: 'Food Box',
  },
  {
    title: 'Foot Hills Community Church',
    address: '122 Grange Ave Molalla, OR 97038 ',
    phone: 'Main Line: 503-829-5101',
    description: 'Food pantry for families of Molalla-River School District.',
    hours: 'Hours: 5:30-8 p.m. Mon., Wed.; 10 a.m.-2 p.m. Tues., Thurs.',
    type: 'Food Box',
  },
  {
    title: 'Francis Center',
    address: '6535 SE 82nd Ave. Portland, OR 97266 ',
    phone: 'Main Line: 503-775-6784',
    description:
      'Food boxes every 30 days with current mail as proof of address. Boundaries: SE 39th-136th, Clatsop to Powell, Powell to Glisan, 60th-82nd.',
    hours:
      'Food pantry hours: 10 a.m.-1:45 p.m. Mon.- Thurs. Closed major holidays.',
    type: 'Food Box',
  },
  {
    title: 'Good Roots Community Church',
    address: '1908 SE Courtney Rd. Milwaukie, OR 97222 ',
    phone: 'Main Line: 503-654-0507',
    description:
      'Food boxes available for residents needing extra food in 97222 and 97267 zip codes. Hot meal on 3rd Sat. Clothing closet. Hours for food boxes are same. No hot meal or clothing closet.',
    hours: 'Hours: 9 a.m.-noon Sat. Closed holidays.',
    type: 'Food Box',
  },
  {
    title: 'Helping Hands Food Pantry',
    address:
      '14986 NW Cornell Rd. (Sunset Presbyterian Church) Portland, OR 97229 ',
    phone: 'Main Line: 503-292-9293',
    description:
      'Adult and childrens clothing and shoes. Visits limited to twice a month. Five items per family member. Registration required. Call first; ID required; must live in area',
    hours: '9:30 a.m.-noon Wed.; 4:00 p.m.-6:30 p.m. Thurs.',
    type: 'Food Box',
  },
  {
    title: 'King of Kings Lutheran',
    address: '5501 SE Thiessen Rd Milwaukie, OR ',
    phone: 'Contact: 503-659-0990',
    description: 'Food Pantry.',
    hours: 'Hours: 3-6 p.m. Second and fourth Thurs.',
    type: 'Food Box',
  },
];

const options = {
  provider: 'google',
  apiKey: 'AIzaSyBgZzKaQIwYReRP82CUEaUrDeImn2fwtzk',
  formatter: null,
};

const geocoder = NodeGeocoder(options);

async function myCoordinates() {
  const newResources = await Promise.all(
    resources.map(async (resource) => {
      const [{ latitude, longitude }] = await geocoder.geocode(
        resource.address
      );
      return { ...resource, latitude, longitude };
    })
  );
  return newResources;
}

async function saveCoordinates() {
  const coordinates = await myCoordinates();
  const newResources = await Promise.all(
    coordinates.map(async (coords) => {
      return Resource.insert(coords);
    })
  );
  return newResources;
}
saveCoordinates();
