const NodeGeocoder = require('node-geocoder');
const Resource = require('../models/Resource');

const resources = [
  {
    title: 'Lift Urban Portland',
    address:
      '1838 SW Jefferson St. (First Immanuel Lutheran Church) Portland, OR 97201 ',
    phone: 'Main Line: 503-221-1224',
    description:
      '(First Immanuel Lutheran Church) Emergency food pantry for low-income NW and downtown residents. Available twice per month with proof of residency and four times per month for residents with dependents. Delivered food boxes available with referral. Call for more info Food is pre-packaged',
    hours: 'Hours 3- 6pm. Tues., Thurs., Fri.',
    type: 'Food Box',
  },
  {
    title: 'Mainspring',
    address: '3500 NE 82nd Ave. Portland, OR 97220 ',
    phone: 'Main Line: 503-233-5533',
    description:
      'Weekly food pantry. Bring own bag. Access once weekly. Personal hygiene items upon request and availability.',
    hours: 'Hours: 10 a.m.-1 p.m. Mon.-Wed.',
    type: 'Food Box',
  },
  {
    title: 'Metro Church of Christ',
    address: '1525 NW Division St. Gresham, OR 97030 ',
    phone: 'Main Line: 503-667-0773',
    description: 'Emergency food boxes. Saturday breakfast is to-go.',
    hours: 'Hours: 11am-1pm, Mon.-Fri. for food boxes.',
    type: 'Food Box',
  },
  {
    title: 'Molalla Service Center',
    address: '412 S Sweigle St. Molalla, OR 97038 ',
    phone: 'Contact: 503-829-5561',
    description: 'Food Pantry.',
    hours: 'Hours: 10 a.m.-2 p.m. Mon., Wed.',
    type: 'Food Box',
  },
  {
    title: 'Neighborhood House',
    address: '3445 SW Moss St. Portland, OR 97219 ',
    phone: 'Main Line: 503-246-1663',
    description:
      'Food boxes two times per month. Portland city limits west of the Willamette and Lake Oswego.',
    hours: 'Hours: 10 a.m.-noon, 1:30-5 p.m. Mon., Wed.; 3-8 p.m. Thurs.',
    type: 'Food Box',
  },
  {
    title: 'Oregon City United Methodist Church',
    address: '18955 South End Rd. Oregon City, OR 97045 ',
    phone: 'Contact: 503-656-3433',
    description: 'Food Pantry.',
    hours: 'Hours: 1-4 p.m. Wed.',
    type: 'Food Box',
  },
  {
    title: 'Our House Esthers Pantry/Tods Corner',
    address: '10202 SE 32nd Ave. Milwaukie, OR 97222 ',
    phone: 'Main Line: 503-349-4699',
    description:
      'Supplemental food for clients each month. Offers personal care items, clothing and household items. Clients must have HIV and referral from case manager. Esthers Pantry Ste. 601, Tods Corner Ste. 502',
    hours: 'Hours: 1-4 p.m. Mon.; 2-5 p.m. Tues., Thurs.',
    type: 'Food Box',
  },
  {
    title: 'Portland Adventist Community Services',
    address: '11020 NE Halsey St. Portland, OR 97220 ',
    phone: 'Main Line: 503-252-8500',
    description:
      'Client Choice Grocery Warehouse provides emergency 3 to 5 days supply of food once a month. Drive through pickup',
    hours: 'Hours: 9-11 a.m. Mon.-Fri.',
    type: 'Food Box',
  },
  {
    title: 'Richmond Cmty. Church/Heartwork Ministries',
    address: '3941 SE Division St. Portland, OR 97202 ',
    phone: 'Main Line: 503-460-7335',
    description:
      'Canned food, personal hygiene items, clothing. Services for housed and homeless. Shop once per week per family. No boundaries.',
    hours: 'Hours: 11 a.m.-1 p.m. Tues.',
    type: 'Food Box',
  },
  {
    title: 'Rock Creek Church Food Pantry',
    address: '4470 NW 185th Ave. Portland, OR 97229 ',
    phone: 'Main Line: 503-645-2525',
    description:
      'Shopping food pantry for those in need. Bring shopping bags, if available.',
    hours: 'Hours: 9 a.m.- noon, 4-7 p.m. Tues.',
    type: 'Food Box',
  },
  {
    title: 'Salvation Army',
    address: '351 SE Oak St. Hillsboro, OR 97123 ',
    phone: 'Main Line: 503-640-4311',
    description:
      'Food boxes for Wash. Co. residents. First visit requires one piece of mail with name and current address. One box every 30 days.',
    hours: 'Hours: 1-3 p.m. Mon., Tues., Thurs., Fri.',
    type: 'Food Box',
  },
  {
    title: 'Salvation Army',
    address: '5335 N Williams Ave. Portland, OR 97217 ',
    phone: 'Main Line: 971-340-4019',
    description:
      'Food boxes once every 30 days for select zip codes. Proof of address required, unless homeless. Call locations for applicable zip codes (entrance on Moore Ave).',
    hours: 'Hours: 10 a.m.-noon, 1-4 p.m. Mon., Wed., Fri.',
    type: 'Food Box',
  },
  {
    title: 'Salvation Army',
    address: '1712 NE Sandy Blvd. Portland, OR 97232 ',
    phone: 'Main Line: 503-239-1264',
    description:
      'Food boxes once every 30 days for select zip codes. Proof of address required, unless homeless. Call locations for applicable zip codes. Must bring reusable bag.',
    hours: 'Hours: 9-11:30 a.m., 1-4 p.m. Mon., Wed., Fri.',
    type: 'Food Box',
  },
  {
    title: 'Salvation Army',
    address: '473 SE 194th Ave. Portland, OR 97233 ',
    phone: 'Main Line: 503-661-8972',
    description:
      'Food boxes once every 30 days for select zip codes. Proof of address required, unless homeless. Call locations for applicable zip codes.',
    hours: 'Hours: 9 a.m.-12, 1-3 p.m. Mon.-Thurs.',
    type: 'Food Box',
  },
  {
    title: 'Sandy Activity Night Community Dinner',
    address: '39290 Scenic St. Sandy, OR 97055 ',
    phone: 'Main Line: 503-995-7931',
    description:
      'Clothing, hygiene items and shelter from the weather. Hot meal served at 6 p.m. Take home meals available.',
    hours: 'CLOSED',
    type: 'Food Box',
  },
  {
    title: 'Sandy Community Action Center',
    address: '38982 Pioneer Blvd Sandy, OR 97055 ',
    phone: 'Main Line: 503-668-4746',
    description:
      'Services Oregon Trail School District area. Food pantry, monthly food boxes, daily bread and pastries, clothing cards, monthly senior food boxes, Thanksgiving baskets, energy assistance.',
    hours:
      'Pantry hours: 10 a.m.-4 p.m. Wed., Fri. Thrift Store Hours: 10 a.m.-4 p.m. Mon.-Fri.',
    type: 'Food Box',
  },
  {
    title: 'Sherwood Helping Hands',
    address: '22280 SW Washington St. Sherwood, OR 97140 ',
    phone: 'Main Line: 503-625-7975',
    description:
      'Food boxes for families. Hours: 9-10 a.m. 3rd Sat. Call to set up appt.',
    hours: 'Hours: 9:30AM-10:30AM',
    type: 'Food Box',
  },
  {
    title: 'Snowcap Comm. Charities',
    address: '17805 SE Stark St. Gresham, OR 97233 ',
    phone: 'Main Line: 503-674-8785',
    description:
      'Shopping-style food boxes and adult and children\u2019s clothing available up to once a month with proof of address postmarked within 30 days. Limited energy assistance when available (est. Jan.-March). Serves only east of 82nd Ave. Clothing closet is closed during coronavirus shutdown.',
    hours: 'CLOSED',
    type: 'Food Box',
  },
  {
    title: 'Southeast Comm. Food Pantry and Clothes Closet',
    address: '5535 SE Rhone St. Portland, OR 97206 ',
    phone: 'Main Line: 503-895-6102',
    description:
      'Food pantry once a month. No ID required. Harvest Share free produce giveaway 4th Thurs. (except Nov.). Bring bags or box. Pantry and clothes closet closed after Harvest Share.',
    hours: 'Hours: 2-7 p.m. Mon., Thurs.',
    type: 'Food Box',
  },
  {
    title: 'St. Andrew Emergency Services',
    address: '4940 NE Eighth Ave. Portland, OR 97211 ',
    phone: 'Main Line: 971-244-0339',
    description: 'Emergency food pantry every 30 days. Service area: 97211.',
    hours: 'Hours: 9 a.m.-1 p.m. Wed.-Fri.',
    type: 'Food Box',
  },
  {
    title: 'St. Francis Food Pantry - Hope Diner/Shelter',
    address: '15659 SW Oregon St. Sherwood, OR 97140 ',
    phone: 'Main Line: 503-625-7067',
    description:
      'Shopping-style food pantry available for low-income residents of Tualatin, Sherwood, Newberg and King City.',
    hours: 'Hours: 9-11 a.m., 5-7 p.m. Wed.; 9-11 a.m. Thurs.',
    type: 'Food Box',
  },
  {
    title: 'St. John the Apostle',
    address: '417 Washington St. Oregon City, OR 97045 ',
    phone: 'Main Line: 503-742-8200',
    description: 'Food Pantry.',
    hours: 'Hours: 4-5 p.m. Wed.',
    type: 'Food Box',
  },
  {
    title: 'St. Marks Lutheran Church/Bethlehem Childrens Clothes Closet',
    address: '5415 SE Powell Blvd. Portland, OR 97206 ',
    phone: 'Main Line: 503-777-1443',
    description:
      'No-charge food pantry every Friday. Hours: 3-5:30 p.m. Verified residents of 97206 zip code only. Enter from 54th St.',
    hours: 'Hours: 3-5:30 p.m. Fri.',
    type: 'Food Box',
  },
  {
    title: 'St. Michaels',
    address: '18090 SE Langensand Rd. Sandy, OR 97053 ',
    phone: 'Contact: 503-668-4746',
    description: 'Prepacked food boxes for pickup by appointment 10',
    hours: '10 a.m.- 1p.m. Thur',
    type: 'Food Box',
  },
  {
    title: 'St. Stephens Episcopal Church',
    address: '1432 SW 13th Ave. Portland, OR 97201 ',
    phone: 'Main Line: 503-223-6424',
    description: 'Fourth Thurs. monthly food pantry. Lottery style.',
    hours: 'Hours: Noon-4 p.m.',
    type: 'Food Box',
  },
  {
    title: 'St. Vincent de Paul Multnomah Co.',
    address: '8101 SE Cornwell St. Portland, OR 97206 ',
    phone: 'Main Line: 503-235-8431',
    description:
      'Food boxes: 1-3:30 p.m. Tues., Fri. Clack. and Mult. counties only. Closed major holidays. Available for zip codes 97223 or 97224 only; proof of residence required. Requests for help are only taken by phone for now.',
    hours: '9:30 a.m. -12 p.m. and 1-3:30 p.m. Mon.-Fri.',
    type: 'Food Box',
  },
  {
    title: 'St. Vincent de Paul Washington Co.',
    address: '9905 SW McKenzie St. Tigard, OR 97223 ',
    phone: 'Main Line: 503-684-8280',
    description:
      'Emergency Services: dial main number and press 1, food pantry access from St. Anthony Church, Serves 97223, 97224.',
    hours:
      'Noon-2:30 p.m. Mon., Tues., Thurs., Fri.; 1:00 p.m.-3:00 p.m. Wed.; 10:00 a.m.-noon Sat.; 4:30 p.m.-6:30 p.m. Thur.',
    type: 'Food Box',
  },
  {
    title: 'St. Vincent de Paul Washington Co.',
    address: '1660 Elm St. Forest Grove, OR 97116 ',
    phone: 'Main Line: 503-357-9647',
    description: 'CLOSED',
    hours: 'CLOSED',
    type: 'Food Box',
  },
  {
    title: 'St. Vincent de Paul Washington Co.',
    address: '12250 SW Fifth St. Beaverton, OR 97005 ',
    phone: 'Main Line: 503-643-1702',
    description:
      'Mon.-Fri. by appt. Contact Care to Share for appt. With appointment through Care to Share at 503-591-9025 Emergency pre-packed food bags available at the door',
    hours:
      '9:00 a.m.-11:00 a.m. Mon.-Thurs. and 6:00 p.m.-7:00 p.m. Mon.-Thurs.',
    type: 'Food Box',
  },
  {
    title: 'St. Vincent de Paul Washington Co.',
    address: '5995 NW 178th Ave Portland, OR 97229 ',
    phone: 'Main Line: 503-985-6046',
    description:
      'Hours: 4-5:30 p.m. Mon., 10 a.m.- 11:30 Thurs., 11 a.m.-12:30 p.m. Fri.',
    hours:
      'Hours: 4-5:30 p.m. Mon., 10 a.m.- 11:30 Thurs., 11 a.m.-12:30 p.m. Fri.',
    type: 'Food Box',
  },
  {
    title: 'St. Vincent de Paul Washington Co.',
    address: '3145 SW 192nd Ave Beaverton, OR 97006 ',
    phone: 'Main Line: 503-985-6046',
    description: 'Tues., Fri. by appt.',
    hours: '',
    type: 'Food Box',
  },
  {
    title: 'St. Vincent de Paul Washington Co.',
    address: '447 SE Third Ave Hillsboro, OR 97123 ',
    phone: 'Main Line: 503-693-7528',
    description:
      '9:00 a.m.-11:30 a.m. Mon., Wed., Thurs. with drive-up and walk-up available',
    hours:
      '9:00 a.m.-11:30 a.m. Mon., Wed., Thurs. with drive-up and walk-up available',
    type: 'Food Box',
  },
  {
    title: 'Sunshine Division',
    address: '12436 SE Stark St. Portland, OR 97233 ',
    phone: 'Main Line: 971-255-0834',
    description:
      'Emergency food relief to families with children under 18, seniors over 62, and single adults receiving SSI, SSDI, VA pension or SNAP benefits. Must have Portland address.',
    hours:
      'Stark St. hours: 9:30-11 a.m., 12:30-3:30 p.m. Tues.-Fri.; 9 a.m.-1 p.m. Sat.',
    type: 'Food Box',
  },
  {
    title: 'Sunshine Division',
    address: '687 N Thompson St. Portland, OR 97227 ',
    phone: 'Main Line: 503-823-2102',
    description:
      'Emergency food relief to families with children under 18, seniors over 62, and single adults receiving SSI, SSDI, VA pension or SNAP benefits. Must have Portland address.',
    hours:
      'Thompson St. hours: 9:30-11 a.m., 12:30-3:30 p.m. Mon.-Fri.; 9 a.m.-1 p.m. Sat.',
    type: 'Food Box',
  },
  {
    title: 'SVDP St. Aloysius Church',
    address: '297 NW Broadway St. Estacada, OR 97023 ',
    phone: 'Main Line: 503-630-2416',
    description:
      'Food Pantry. Premade boxes for pick-up 10 a.m.- 1 p.m. Thurs.at St. Vincent De Paul 297 NW Broadway St. Estacada. call for appointment to pick up the box',
    hours: 'Hours: 10:30 a.m.-1 p.m. First and third Tues.',
    type: 'Food Box',
  },
  {
    title: 'SVDP St. Patricks Church',
    address: '498 NW Ninth St. Canby, OR 97013 ',
    phone: 'Main Line: 503-266-9411',
    description: 'Food pantry.',
    hours: 'Hours: 3:30 p.m.-8 p.m. Wed.',
    type: 'Food Box',
  },
  {
    title: 'The Canby Center',
    address: '681 SW Second Ave. Canby, OR ',
    phone: 'Main Line: 503-266-2920',
    description: 'Food pantry and Harvest Share.',
    hours:
      'Pantry hours: 9:30 a.m. First and third Sat. Harvest Share hours: 9:30 a.m. Tues.',
    type: 'Food Box',
  },
  {
    title: 'Tigard Covenant Church',
    address: '11321 SW Naeve St. Tigard, OR 97224 ',
    phone: 'Main Line: 503-639-3084',
    description:
      'Distribution hours: 10 a.m.-noon Tues. Free community dinner hours: 6-7 p.m.',
    hours:
      'Distribution hours: 10 a.m.-noon Tues. Free community dinner hours: 6-7 p.m.',
    type: 'Food Box',
  },
  {
    title: 'Trinity Episcopal Cathedral',
    address: '147 NW 19th Ave. at Everett St. Portland, OR 97209 ',
    phone: 'Main Line: 503-222-9811',
    description:
      'Bags of groceries, Sisters of the Road meal tickets, grab and go food, personal hygiene items.',
    hours: 'Hours: 11 a.m.-1 p.m. Mon.-Fri.; 10 a.m.-noon Sat.',
    type: 'Food Box',
  },
  {
    title: 'True Life Fellowship Food Pantry',
    address: '1895 NW 169th Pl. Beaverton, OR 97006 ',
    phone: 'Main Line: 503-810-7426',
    description: 'Emergency food boxes for low-income Wash. Co. residents.',
    hours: 'Hours: 10 a.m.-1 p.m. 2nd and 4th Sat.',
    type: 'Food Box',
  },
  {
    title: 'Union Gospel Mission',
    address: '3 NW Third Ave. Portland, OR 97209 ',
    phone: 'Main Line: 503-274-4483',
    description:
      'Food boxes until supplies last. Eligible every 30 days. Signature, photo ID and questionnaire required upon receipt of food. Numbers passed out at 11:15 a.m., boxes served in numerical order at 11:30 a.m.',
    hours: 'Hours: 11:15 a.m. Fri.',
    type: 'Food Box',
  },
  {
    title: 'Unity Church of Beaverton Food Pantry',
    address: '12650 SW Fifth St. Beaverton, OR 97005 ',
    phone: 'Main Line: 503-646-3364',
    description:
      'Emergency food boxes for low-income Beaverton residents. Serves 97005, 97006, 97007,97008 zip codes only. Referrals available.',
    hours: 'Hours: 10 a.m.-4 p.m. Tues., Wed.',
    type: 'Food Box',
  },
  {
    title: 'Wapato Valley Church Food Pantry',
    address: '200 Front St. (The Hub) Gaston, OR 97119 ',
    phone: 'Main Line: 503-985-3351',
    description:
      'Food bank available for low-income residents of Gales Creek, Gaston, Laurelwood and Cherry Grove.',
    hours: 'Hours: 5-7 p.m. Thurs.',
    type: 'Food Box',
  },
  {
    title: 'West Linn Food Pantry',
    address: '1683 Willamette Falls Dr. West Linn, OR 97068 ',
    phone: '',
    description:
      'May access food pantry once per month. Bring ID with proof of address. Walk-in only. Premade boxes for pick-up 10 a.m.- 1 p.m. Thurs.at St. Vincent De Paul 297 NW Broadway St. Estacada. call for appointment to pick up the box',
    hours: 'Hours: 3-6 p.m. Thurs.',
    type: 'Food Box',
  },
  {
    title: 'William Temple House',
    address: '2023 NW Hoyt St. Portland, OR 97209 ',
    phone: 'Main Line: 503-226-3021',
    description:
      'Food pick-up twice each month, all year. Includes health and hygiene items.',
    hours: 'Hours 11 a.m-1 p.m. Tues.-Thurs.',
    type: 'Food Box',
  },
  {
    title: 'Zarephath Ministries',
    address:
      '59 NW Ava Ave. (enter through parking lot door) Gresham, OR 97030 ',
    phone: 'Main Line: 503-667-7932',
    description: 'verify residency. Closed major holidays.',
    hours: 'CLOSED',
    type: 'Food Box',
  },
  {
    title: 'First Baptist Church',
    address: '909 SW 11th Ave. Portland, OR 97205 ',
    phone: 'Main Line: 503-228-7465',
    description:
      'Food boxes with voucher through Outside In, Northwest Pilot Program, Transition Projects or Central City Concern.',
    hours: 'Hours: 2-3:45 p.m. Mon., Thurs.',
    type: 'Food Box',
  },
  {
    title: 'Forest Grove Foursquare Church Food Pantry',
    address: '1719 Cedar St. Forest Grove, OR 97116 ',
    phone: 'Main Line: 503-357-4400',
    description:
      'Food boxes for low-income residents of Dilly, Cornelius, Forest Grove, Gales Creek, Gaston and Laurelwood.',
    hours: 'Hours: 10:00 a.m.-noon Thurs. with drive-up, walk-up and bike-up',
    type: 'Food Box',
  },
  {
    title: 'Hillsboro Seventh-Day Adventist',
    address: '367 NE Grant St. Hillsboro, OR 97124 ',
    phone: 'Main Line: 503-648-3922',
    description: 'Provides food and clothing to Wash. Co. residents.',
    hours: 'Hours: 6:30-8 p.m. Thurs.',
    type: 'Food Box',
  },
  {
    title: 'Holy Trinity Food Closet',
    address: '13715 SW Walker Rd. Beaverton, OR 97005 ',
    phone: 'Main Line: 503-641-1842',
    description:
      'Food pantry. Referred through Care to Share (503-591-9025). May receive assistance twice a month.',
    hours: '10:00 a.m.-noon Tues., Wed., Fri.',
    type: 'Food Box',
  },
  {
    title: 'Tualatin Schoolhouse Pantry',
    address:
      '3550 SW Borland Rd (Rolling Hills Community Church) Tualatin, OR 97062 ',
    phone: 'Main Line: 503-783-0721',
    description:
      'Shopping pantry once a month for low-income residents of Durham, Lake Oswego, Tualatin, West Linn and Wilsonville with proof of address. Call to join wait list for emergency dental care.',
    hours:
      'Hours: 4:00 p.m.-7:00 p.m. Mon.; 10:00 a.m.-1:00 p.m. Wed.; 10:00 a.m.-1:00 p.m. Fri.',
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
