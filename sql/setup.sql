-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP TABLE IF EXISTS users, resources, comments CASCADE;

CREATE TABLE users (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    username TEXT NOT NULL,
    password_hash TEXT NOT NULL
);

CREATE TABLE resources (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id BIGINT REFERENCES users(id),
    latitude DEC(8, 6),
    longitude DEC(9, 6),
    type TEXT NOT NULL,
    description TEXT NOT NULL,
    image TEXT,
    hours TEXT,
    title TEXT NOT NULL,
    address TEXT,
    phone VARCHAR
);

INSERT INTO resources (title, address, phone, description, hours, type, longitude, latitude)

VALUES
    (
      'Allen Temple Emergency Aid Center',
      '4214 NE Eighth Ave. Portland, OR 97211',
      'Main Line: 503-289-6615',
      'Food boxes. Service area from NE Broadway to N Lombard and NE 42nd to N Greeley.',
      'Hours: 5-7 p.m. Tues.; 11 a.m.-2 p.m. Wed., Sat. Closed 1st & 2nd Tues., 1st Wed., 1st Sat.',
      'Food Box',
      '45.4795398',
      '-122.6210061'
    ),
    (
      'Beaverton Seventh-Day Adventist',
      '14645 SW Davis Rd. Beaverton, OR 97007',
      '',
      'Food boxes.',
      'CLOSED',
      'Food Box',
      '45.5264725',
      '-122.6738201'
    ),
    (
      'Bethel Congregation United Church of Christ',
      '5150 SW Watson Ave. Beaverton, OR 97005',
      'Main Line: 503-591-9025',
      'Food pantry for low income Beaverton residents. Register with Care to Share (503) 591-9025.',
      'Hours: 11:30 a.m.-12:30 p.m. Mon., Thurs.; 6:30-7:30 p.m. Wed. Emergency food bags available 9 a.m.-3 p.m. Mon.-Thurs.',
      'Food Box',
      '45.5189387',
      '-122.6603985'
    ),
    (
      'Care to Share',
      'Undisclosed Location',
      'Main Line: 503-591-9025',
      'Emergency food boxes for Beaverton residents. Utility assistance provided with shut-off notice. Services for the following zip codes only: 97003, 97005, 97006, 97007, 97008, 97078, 97225, 97229. Tigard zip codes (no utility assistance): 97223. Hillsboro zip codes (no utility asst.): 97123, 97124.',
      'Phone hours: 9 a.m.-2 p.m. Mon.-Fri. Call for appt. Call for energy assistance: 9-9:30 a.m. Mon.',
      'Food Box',
      '45.460197',
      '-122.5810875'
    ),
    (
      'Cascade Vineyard Church Food Pantry',
      '14460 SW 114th Ave. (house behind Christ the King Lutheran Church) Tigard, OR 97224',
      'Main Line: 503-684-8225',
      'Food pantry. Lottery system.',
      'Hours: Noon-3 p.m. Thurs.',
      'Food Box',
      '45.42888629999999',
      '-122.7785732'
    ),
    (
      'Church of the Nazarene',
      '716 Taylor St Oregon City, OR 97045',
      'Main Line: 503-656-6536',
      'Food Pantry.',
      'Hours: 6:30-8:30 p.m. Mon.',
      'Food Box'
    ),
    (
      'Colton Helping Hands',
      '30138 S. Wall St. Colton, OR 97017',
      'Main Line: 503-829-5679',
      'Food Pantry.',
      'Hours: 11 a.m.-3 p.m. Tues. Fourth Mon. of every month, free food for all. Hours: 10 a.m.-1 p.m.',
      'Food Box'
    ),
    (
      'Columbia Pacific Food Bank',
      '627 Adams Ave. Vernonia, OR 97064',
      'Main Line: 503-429-1414',
      'Emergency food boxes provide 3-day supply of groceries per month for low-income residents of Vernonia, Timber, Manning and Buxton.',
      'Hours: 10 a.m.-2 p.m. Tues., Thurs.',
      'Food Box'
    ),
    (
      'Cornelius UMC Community Table Food Pantry',
      '1095 S Beech Ave. Cornelius, OR 97113',
      'Contact: 503-724-9766',
      'Emergency food boxes. Walk-ins welcome. May call for urgent appointments. English/ Spanish.',
      'Pantry and clothes closet hours: 1-3 p.m. 1st Wed., 10 a.m.-noon 3rd Sat., 4:30-7 p.m. Mon. in May, June, July only.Hours: 1:00-3:00 first Wed. only; call first',
      'Food Box'
    ),
    (
      'Ecumenical Ministries of Oregon Northeast Emergency Food Program',
      '4800 NE 72nd Ave. (Luther Memorial) Portland, OR 97218',
      'Main Line: 503-284-5470',
      'Emergency food boxes and clothing. Three times every six months. If no car, bring bag or cart. Lottery system starts at 1 p.m. No geographic boundaries. Provide verification for all members of household. Drive-through pickup Clothing services suspended',
      'Hours: 1-3 p.m. Tues., Thurs., Sat.',
      'Food Box'
    ),
    (
      'Estacada Area Food Bank',
      '272 S. Broadway St. Estacada, OR 97023',
      'Main Line: 503-630-2888',
      'Food Pantry.',
      'Hours: 10-11:45 a.m., 12:30-3:45 p.m. Tues., Fri.',
      'Food Box'
    ),
    (
      'Estacada School District Community Pantry',
      '301 NE 2nd Estacada, OR 97023',
      'Main Line: 503-630-2888',
      'Pantry open to all households with a student enrolled in the school district. Located at Clackamas River Elementary School.',
      'Hours: 1-4 p.m. Wed. during school year. Summer hours',
      'Food Box'
    ),
    (
      'Faith Cafe',
      '10390 SW Canyon Rd. Beaverton , OR 97005',
      '',
      'The St. Mathews Lunch Program will be modified as follow: The meal will be a brown bag to go. Guests may come in to use the restroom facilities but are to pick up their lunch and exit the building.',
      'Hours: 11:30 a.m.-12:30 p.m. Sat.',
      'Food Box'
    ),
    (
      'First Baptist Church Oregon City',
      '819 John Adams St. Oregon City, OR 97045',
      'Main Line: 503-656-3854',
      'Food pantry.',
      'Hours: 1 p.m.-4 p.m. Fri.',
      'Food Box'
    ),
    (
      'First Presbyterian Church',
      '1321 Linn Ave Oregon City, OR 97045',
      'Main Line: 503-656-7444',
      'Food Pantry.',
      'Hours: 1-4 p.m. Tues.',
      'Food Box'
    ),
    (
      'Foot Hills Community Church',
      '122 Grange Ave Molalla, OR 97038',
      'Main Line: 503-829-5101',
      'Food pantry for families of Molalla-River School District.',
      'Hours: 5:30-8 p.m. Mon., Wed.; 10 a.m.-2 p.m. Tues., Thurs.',
      'Food Box'
    ),
    (
      'Francis Center',
      '6535 SE 82nd Ave. Portland, OR 97266',
      'Main Line: 503-775-6784',
      'Food boxes every 30 days with current mail as proof of address. Boundaries: SE 39th-136th, Clatsop to Powell, Powell to Glisan, 60th-82nd.',
      'Food pantry hours: 10 a.m.-1:45 p.m. Mon.- Thurs. Closed major holidays.',
      'Food Box'
    ),
    (
      'Good Roots Community Church',
      '1908 SE Courtney Rd. Milwaukie, OR 97222',
      'Main Line: 503-654-0507',
      'Food boxes available for residents needing extra food in 97222 and 97267 zip codes. Hot meal on 3rd Sat. Clothing closet. Hours for food boxes are same. No hot meal or clothing closet.',
      'Hours: 9 a.m.-noon Sat. Closed holidays.',
      'Food Box'
    ),
    (
      'Helping Hands Food Pantry',
      '14986 NW Cornell Rd. (Sunset Presbyterian Church) Portland, OR 97229',
      'Main Line: 503-292-9293',
      'Adult and childrens clothing and shoes. Visits limited to twice a month. Five items per family member. Registration required. Call first; ID required; must live in area',
      '9:30 a.m.-noon Wed.; 4:00 p.m.-6:30 p.m. Thurs.',
      'Food Box'
    ),
    (
      'King of Kings Lutheran',
      '5501 SE Thiessen Rd Milwaukie, OR',
      'Contact: 503-659-0990',
      'Food Pantry.',
      'Hours: 3-6 p.m. Second and fourth Thurs.',
      'Food Box'
    ),
    (
      'Lift Urban Portland',
      '1838 SW Jefferson St. (First Immanuel Lutheran Church) Portland, OR 97201',
      'Main Line: 503-221-1224',
      '(First Immanuel Lutheran Church) Emergency food pantry for low-income NW and downtown residents. Available twice per month with proof of residency and four times per month for residents with dependents. Delivered food boxes available with referral. Call for more info Food is pre-packaged',
      'Hours 3- 6pm. Tues., Thurs., Fri.',
      'Food Box'
    ),
    (
      'Mainspring',
      '3500 NE 82nd Ave. Portland, OR 97220',
      'Main Line: 503-233-5533',
      'Weekly food pantry. Bring own bag. Access once weekly. Personal hygiene items upon request and availability.',
      'Hours: 10 a.m.-1 p.m. Mon.-Wed.',
      'Food Box'
    ),
    (
      'Metro Church of Christ',
      '1525 NW Division St. Gresham, OR 97030',
      'Main Line: 503-667-0773',
      'Emergency food boxes. Saturday breakfast is to-go.',
      'Hours: 11am-1pm, Mon.-Fri. for food boxes.',
      'Food Box'
    ),
    (
      'Molalla Service Center',
      '412 S Sweigle St. Molalla, OR 97038',
      'Contact: 503-829-5561',
      'Food Pantry.',
      'Hours: 10 a.m.-2 p.m. Mon., Wed.',
      'Food Box'
    ),
    (
      'Neighborhood House',
      '3445 SW Moss St. Portland, OR 97219',
      'Main Line: 503-246-1663',
      'Food boxes two times per month. Portland city limits west of the Willamette and Lake Oswego.',
      'Hours: 10 a.m.-noon, 1:30-5 p.m. Mon., Wed.; 3-8 p.m. Thurs.',
      'Food Box'
    ),
    (
      'Oregon Food Bank',
      'Undisclosed Location',
      'Main Line: 503-282-0555',
      'Various locations. Provides fruit, vegetables and pantry staples free of charge to anyone in need of food. Some pantries have closed or changed hours. Info is in on website or you can call main OFB number.',
      'Phone hours: 8 a.m.-4:30 p.m. Mon.-Fri.',
      'Food Box'
    ),
    (
      'Oregon City United Methodist Church',
      '18955 South End Rd. Oregon City, OR 97045',
      'Contact: 503-656-3433',
      'Food Pantry.',
      'Hours: 1-4 p.m. Wed.',
      'Food Box'
    ),
    (
      'Our House Esthers Pantry/Tods Corner',
      '10202 SE 32nd Ave. Milwaukie, OR 97222',
      'Main Line: 503-349-4699',
      'Supplemental food for clients each month. Offers personal care items, clothing and household items. Clients must have HIV and referral from case manager. Esthers Pantry Ste. 601, Tods Corner Ste. 502',
      'Hours: 1-4 p.m. Mon.; 2-5 p.m. Tues., Thurs.',
      'Food Box'
    ),
    (
      'Portland Adventist Community Services',
      '11020 NE Halsey St. Portland, OR 97220',
      'Main Line: 503-252-8500',
      'Client Choice Grocery Warehouse provides emergency 3 to 5 days supply of food once a month. Drive through pickup',
      'Hours: 9-11 a.m. Mon.-Fri.',
      'Food Box'
    ),
    (
      'Richmond Cmty. Church/Heartwork Ministries',
      '3941 SE Division St. Portland, OR 97202',
      'Main Line: 503-460-7335',
      'Canned food, personal hygiene items, clothing. Services for housed and homeless. Shop once per week per family. No boundaries.',
      'Hours: 11 a.m.-1 p.m. Tues.',
      'Food Box'
    ),
    (
      'Rock Creek Church Food Pantry',
      '4470 NW 185th Ave. Portland, OR 97229',
      'Main Line: 503-645-2525',
      'Shopping food pantry for those in need. Bring shopping bags, if available.',
      'Hours: 9 a.m.- noon, 4-7 p.m. Tues.',
      'Food Box'
    ),
    (
      'Salvation Army',
      '351 SE Oak St. Hillsboro, OR 97123',
      'Main Line: 503-640-4311',
      'Food boxes for Wash. Co. residents. First visit requires one piece of mail with name and current address. One box every 30 days.',
      'Hours: 1-3 p.m. Mon., Tues., Thurs., Fri.',
      'Food Box'
    ),
    (
      'Salvation Army',
      '5335 N Williams Ave. Portland, OR 97217',
      'Main Line: 971-340-4019',
      'Food boxes once every 30 days for select zip codes. Proof of address required, unless homeless. Call locations for applicable zip codes (entrance on Moore Ave).',
      'Hours: 10 a.m.-noon, 1-4 p.m. Mon., Wed., Fri.',
      'Food Box'
    ),
    (
      'Salvation Army',
      '1712 NE Sandy Blvd. Portland, OR 97232',
      'Main Line: 503-239-1264',
      'Food boxes once every 30 days for select zip codes. Proof of address required, unless homeless. Call locations for applicable zip codes. Must bring reusable bag.',
      'Hours: 9-11:30 a.m., 1-4 p.m. Mon., Wed., Fri.',
      'Food Box'
    ),
    (
      'Salvation Army',
      '473 SE 194th Ave. Portland, OR 97233',
      'Main Line: 503-661-8972',
      'Food boxes once every 30 days for select zip codes. Proof of address required, unless homeless. Call locations for applicable zip codes.',
      'Hours: 9 a.m.-12, 1-3 p.m. Mon.-Thurs.',
      'Food Box'
    ),
    (
      'Sandy Activity Night Community Dinner',
      '39290 Scenic St. Sandy, OR 97055',
      'Main Line: 503-995-7931',
      'Clothing, hygiene items and shelter from the weather. Hot meal served at 6 p.m. Take home meals available.',
      'CLOSED',
      'Food Box'
    ),
    (
      'Sandy Community Action Center',
      '38982 Pioneer Blvd Sandy, OR 97055',
      'Main Line: 503-668-4746',
      'Services Oregon Trail School District area. Food pantry, monthly food boxes, daily bread and pastries, clothing cards, monthly senior food boxes, Thanksgiving baskets, energy assistance.',
      'Pantry hours: 10 a.m.-4 p.m. Wed., Fri. Thrift Store Hours: 10 a.m.-4 p.m. Mon.-Fri.',
      'Food Box'
    ),
    (
      'Sherwood Helping Hands',
      '22280 SW Washington St. Sherwood, OR 97140',
      'Main Line: 503-625-7975',
      'Food boxes for families. Hours: 9-10 a.m. 3rd Sat. Call to set up appt.',
      'Hours: 9:30AM-10:30AM',
      'Food Box'
    ),
    (
      'Snowcap Comm. Charities',
      '17805 SE Stark St. Gresham, OR 97233',
      'Main Line: 503-674-8785',
      'Shopping-style food boxes and adult and children\u2019s clothing available up to once a month with proof of address postmarked within 30 days. Limited energy assistance when available (est. Jan.-March). Serves only east of 82nd Ave. Clothing closet is closed during coronavirus shutdown.',
      'CLOSED',
      'Food Box'
    ),
    (
      'Southeast Comm. Food Pantry and Clothes Closet',
      '5535 SE Rhone St. Portland, OR 97206',
      'Main Line: 503-895-6102',
      'Food pantry once a month. No ID required. Harvest Share free produce giveaway 4th Thurs. (except Nov.). Bring bags or box. Pantry and clothes closet closed after Harvest Share.',
      'Hours: 2-7 p.m. Mon., Thurs.',
      'Food Box'
    ),
    (
      'St. Andrew Emergency Services',
      '4940 NE Eighth Ave. Portland, OR 97211',
      'Main Line: 971-244-0339',
      'Emergency food pantry every 30 days. Service area: 97211.',
      'Hours: 9 a.m.-1 p.m. Wed.-Fri.',
      'Food Box'
    ),
    (
      'St. Francis Food Pantry - Hope Diner/Shelter',
      '15659 SW Oregon St. Sherwood, OR 97140',
      'Main Line: 503-625-7067',
      'Shopping-style food pantry available for low-income residents of Tualatin, Sherwood, Newberg and King City.',
      'Hours: 9-11 a.m., 5-7 p.m. Wed.; 9-11 a.m. Thurs.',
      'Food Box'
    ),
    (
      'St. John the Apostle',
      '417 Washington St. Oregon City, OR 97045',
      'Main Line: 503-742-8200',
      'Food Pantry.',
      'Hours: 4-5 p.m. Wed.',
      'Food Box'
    ),
    (
      'St. Marks Lutheran Church/Bethlehem Childrens Clothes Closet',
      '5415 SE Powell Blvd. Portland, OR 97206',
      'Main Line: 503-777-1443',
      'No-charge food pantry every Friday. Hours: 3-5:30 p.m. Verified residents of 97206 zip code only. Enter from 54th St.',
      'Hours: 3-5:30 p.m. Fri.',
      'Food Box'
    ),
    (
      'St. Michaels',
      '18090 SE Langensand Rd. Sandy, OR 97053',
      'Contact: 503-668-4746',
      'Prepacked food boxes for pickup by appointment 10',
      '10 a.m.- 1p.m. Thur',
      'Food Box'
    ),
    (
      'St. Stephens Episcopal Church',
      '1432 SW 13th Ave. Portland, OR 97201',
      'Main Line: 503-223-6424',
      'Fourth Thurs. monthly food pantry. Lottery style.',
      'Hours: Noon-4 p.m.',
      'Food Box'
    ),
    (
      'St. Vincent de Paul Multnomah Co.',
      '8101 SE Cornwell St. Portland, OR 97206',
      'Main Line: 503-235-8431',
      'Food boxes: 1-3:30 p.m. Tues., Fri. Clack. and Mult. counties only. Closed major holidays. Available for zip codes 97223 or 97224 only; proof of residence required. Requests for help are only taken by phone for now.',
      '9:30 a.m. -12 p.m. and 1-3:30 p.m. Mon.-Fri.',
      'Food Box'
    ),
    (
      'St. Vincent de Paul Washington Co.',
      '9905 SW McKenzie St. Tigard, OR 97223',
      'Main Line: 503-684-8280',
      'Emergency Services: dial main number and press 1, food pantry access from St. Anthony Church, Serves 97223, 97224.',
      'Noon-2:30 p.m. Mon., Tues., Thurs., Fri.; 1:00 p.m.-3:00 p.m. Wed.; 10:00 a.m.-noon Sat.; 4:30 p.m.-6:30 p.m. Thur.',
      'Food Box'
    ),
    (
      'St. Vincent de Paul Washington Co.',
      '1660 Elm St. Forest Grove, OR 97116',
      'Main Line: 503-357-9647',
      'CLOSED',
      'CLOSED',
      'Food Box'
    ),
    (
      'St. Vincent de Paul Washington Co.',
      '12250 SW Fifth St. Beaverton, OR 97005',
      'Main Line: 503-643-1702',
      'Mon.-Fri. by appt. Contact Care to Share for appt. With appointment through Care to Share at 503-591-9025 Emergency pre-packed food bags available at the door',
      '9:00 a.m.-11:00 a.m. Mon.-Thurs. and 6:00 p.m.-7:00 p.m. Mon.-Thurs.',
      'Food Box'
    ),
    (
      'St. Vincent de Paul Washington Co.',
      '5995 NW 178th Ave Portland, OR 97229',
      'Main Line: 503-985-6046',
      'Hours: 4-5:30 p.m. Mon., 10 a.m.- 11:30 Thurs., 11 a.m.-12:30 p.m. Fri.',
      'Hours: 4-5:30 p.m. Mon., 10 a.m.- 11:30 Thurs., 11 a.m.-12:30 p.m. Fri.',
      'Food Box'
    ),
    (
      'St. Vincent de Paul Washington Co.',
      '3145 SW 192nd Ave Beaverton, OR 97006',
      'Main Line: 503-985-6046',
      'Tues., Fri. by appt.',
      '',
      'Food Box'
    ),
    (
      'St. Vincent de Paul Washington Co.',
      '447 SE Third Ave Hillsboro, OR 97123',
      'Main Line: 503-693-7528',
      '9:00 a.m.-11:30 a.m. Mon., Wed., Thurs. with drive-up and walk-up available',
      '9:00 a.m.-11:30 a.m. Mon., Wed., Thurs. with drive-up and walk-up available',
      'Food Box'
    ),
    (
      'Sunshine Division',
      '12436 SE Stark St. Portland, OR 97233',
      'Main Line: 971-255-0834',
      'Emergency food relief to families with children under 18, seniors over 62, and single adults receiving SSI, SSDI, VA pension or SNAP benefits. Must have Portland address.',
      'Stark St. hours: 9:30-11 a.m., 12:30-3:30 p.m. Tues.-Fri.; 9 a.m.-1 p.m. Sat.',
      'Food Box'
    ),
    (
      'Sunshine Division',
      '687 N Thompson St. Portland, OR 97227',
      'Main Line: 503-823-2102',
      'Emergency food relief to families with children under 18, seniors over 62, and single adults receiving SSI, SSDI, VA pension or SNAP benefits. Must have Portland address.',
      'Thompson St. hours: 9:30-11 a.m., 12:30-3:30 p.m. Mon.-Fri.; 9 a.m.-1 p.m. Sat.',
      'Food Box'
    ),
    (
      'SVDP St. Aloysius Church',
      '297 NW Broadway St. Estacada, OR 97023',
      'Main Line: 503-630-2416',
      'Food Pantry. Premade boxes for pick-up 10 a.m.- 1 p.m. Thurs.at St. Vincent De Paul 297 NW Broadway St. Estacada. call for appointment to pick up the box',
      'Hours: 10:30 a.m.-1 p.m. First and third Tues.',
      'Food Box'
    ),
    (
      'SVDP St. Patricks Church',
      '498 NW Ninth St. Canby, OR 97013',
      'Main Line: 503-266-9411',
      'Food pantry.',
      'Hours: 3:30 p.m.-8 p.m. Wed.',
      'Food Box'
    ),
    (
      'The Canby Center',
      '681 SW Second Ave. Canby, OR',
      'Main Line: 503-266-2920',
      'Food pantry and Harvest Share.',
      'Pantry hours: 9:30 a.m. First and third Sat. Harvest Share hours: 9:30 a.m. Tues.',
      'Food Box'
    ),
    (
      'Tigard Covenant Church',
      '11321 SW Naeve St. Tigard, OR 97224',
      'Main Line: 503-639-3084',
      'Distribution hours: 10 a.m.-noon Tues. Free community dinner hours: 6-7 p.m.',
      'Distribution hours: 10 a.m.-noon Tues. Free community dinner hours: 6-7 p.m.',
      'Food Box'
    ),
    (
      'Trinity Episcopal Cathedral',
      '147 NW 19th Ave. at Everett St. Portland, OR 97209',
      'Main Line: 503-222-9811',
      'Bags of groceries, Sisters of the Road meal tickets, grab and go food, personal hygiene items.',
      'Hours: 11 a.m.-1 p.m. Mon.-Fri.; 10 a.m.-noon Sat.',
      'Food Box'
    ),
    (
      'True Life Fellowship Food Pantry',
      '1895 NW 169th Pl. Beaverton, OR 97006',
      'Main Line: 503-810-7426',
      'Emergency food boxes for low-income Wash. Co. residents.',
      'Hours: 10 a.m.-1 p.m. 2nd and 4th Sat.',
      'Food Box'
    ),
    (
      'Union Gospel Mission',
      '3 NW Third Ave. Portland, OR 97209',
      'Main Line: 503-274-4483',
      'Food boxes until supplies last. Eligible every 30 days. Signature, photo ID and questionnaire required upon receipt of food. Numbers passed out at 11:15 a.m., boxes served in numerical order at 11:30 a.m.',
      'Hours: 11:15 a.m. Fri.',
      'Food Box'
    ),
    (
      'Unity Church of Beaverton Food Pantry',
      '12650 SW Fifth St. Beaverton, OR 97005',
      'Main Line: 503-646-3364',
      'Emergency food boxes for low-income Beaverton residents. Serves 97005, 97006, 97007,97008 zip codes only. Referrals available.',
      'Hours: 10 a.m.-4 p.m. Tues., Wed.',
      'Food Box'
    ),
    (
      'Wapato Valley Church Food Pantry',
      '200 Front St. (The Hub) Gaston, OR 97119',
      'Main Line: 503-985-3351',
      'Food bank available for low-income residents of Gales Creek, Gaston, Laurelwood and Cherry Grove.',
      'Hours: 5-7 p.m. Thurs.',
      'Food Box'
    ),
    (
      'All Saints Episcopal Church',
      '4033 SE Woodstock Blvd. Portland, OR 97202',
      'Main Line: 503-777-3829',
      'Hot meals.',
      'Hours: 11:30 a.m. Sat.',
      'Ready To Eat'
    ),
    (
      'Blanchet House of Hospitality',
      '310 NW Glisan St. Portland, OR 97209',
      'Main Line: 503-241-4340',
      'Free hot meals. No questions asked.',
      'Hours: 6:30-7:30 a.m. (breakfast), 11:30 a.m. -12:30 p.m. (lunch), 5-6 p.m. (dinner) Mon.- Sat.',
      'Ready To Eat'
    ),
    (
      'Cityteam Portland',
      '526 SE Grand Ave. Portland, OR 97214',
      'Main Line: 503-231-9334',
      'Dining hall serving men, women and children.',
      'CLOSED',
      'Ready To Eat'
    ),
    (
      'Clackamas Service Center',
      '8800 SE 80th Ave. Portland, OR 97206',
      'Main Line: 503-771-7914',
      'Hot meal.',
      'Lunch hours: 1-2 p.m. Tues., Thurs. Dinner hours: 5-6 p.m. Wed., 7-9 p.m. Fri., 5-7 p.m. Sat., 3-4 p.m. Sun.',
      'Ready To Eat'
    ),
    (
      'Community Cafe St. Anthony Catholic Church',
      '9905 SW McKenzie St. follow the signs for the entrance of community cafe Tigard, OR 97223',
      'Main Line: 503-639-4179',
      'Free hot dinner.',
      'Doors open 5 p.m. Meal served 5:30-6:30 p.m. Sun.',
      'Ready To Eat'
    ),
    (
      'Department of Human Services - Food Stamps (SNAP)',
      '5300 NE Elam Young Pkwy. Ste. 110 Hillsboro, OR 97124',
      'Main Line: 503-693-4555',
      'Hours: 8 a.m.-5 p.m. Mon.-Fri.',
      'Hours: 8 a.m.-5 p.m. Mon.-Fri.',
      'Ready To Eat'
    ),
    (
      'Department of Human Services - Food Stamps (SNAP)',
      '15425 NW Greenbrier Pkwy. Beaverton, OR 97006',
      'Main Line: 503-646-9952',
      'Hours: 8 a.m.-5 p.m. Mon.-Fri.',
      'Hours: 8 a.m.-5 p.m. Mon.-Fri.',
      'Ready To Eat'
    ),
    (
      'Department of Human Services - Food Stamps (SNAP)',
      '10777 SW Cascade Ave. Tigard, OR 97223',
      'Main Line: 503-670-9711',
      'Hours: 8 a.m.-5 p.m. Mon.-Fri.',
      'Hours: 8 a.m.-5 p.m. Mon.-Fri.',
      'Ready To Eat'
    ),
    (
      'Faith Cafe',
      '5150 SW Watson Ave. Beaverton, OR 97005',
      '',
      'No ID required. Bag meals to-go. The meal will be a brown bag to go, distributed at the door at the covered walkway. We will start distributing the brown bags as soon as they are ready, as early as 4:15 PM. There will be no give away table or group gathering.',
      'Hours: 4:15 p.m. Sun. only',
      'Ready To Eat'
    ),
    (
      'First Baptist Church',
      '909 SW 11th Ave. Portland, OR 97205',
      'Main Line: 503-228-7465',
      'Hot lunch hours: 2-4 p.m. Mon., Thurs.',
      'Hot lunch hours: 2-4 p.m. Mon., Thurs.',
      'Ready To Eat'
    ),
    (
      'Grace Memorial Episcopal Church',
      '1535 NE 17th Ave. Portland, OR 97232',
      'Main Line: 503-287-0418',
      'Sack lunch hours: 11 a.m.-1 p.m. Tues.-Thurs. Dinner at 6 p.m. Fri. (Except June, July, August.)',
      'Sack lunch hours: 11 a.m.-1 p.m. Tues.-Thurs. Dinner at 6 p.m. Fri. (Except June, July, August.)',
      'Ready To Eat'
    ),
    (
      'Hillsboro Comm. Senior Center',
      '750 SE Eighth Ave. Hillsboro, OR 97123',
      'Main Line: 503-615-1090',
      'Full-service lunch program, $5 per meal. Travel, wellness classes and recreational opportunities.',
      'CLOSED',
      'Ready To Eat'
    ),
    (
      'Livingway Fellowship',
      '39300 Durbarko Rd Sandy, OR 97055',
      'Main Line: 503-668-8088',
      '(see Laundry Love Sandy) Laundry services with hot meal provided. Three free large loads with soap and fabric softener provided.',
      'Laundry (at Cedars Laundromat) and meal: 6-8 p.m. Second Tues. Meal only at Fellowship: 5:45-6:30 p.m. first and third Wed., Sept.-May. Hot Breakfast 8:30-10:30 a.m. Sun,',
      'Ready To Eat'
    ),
    (
      'Meals On Wheels People',
      '7710 SW 31st Ave. Portland, OR 97219',
      'Main Line: 503-736-6325',
      'Senior nutrition program for 60 and older. Home delivery, dozens of neighborhood locations. Meals served at noon. Serves Clark, Wash. and Mult. cos.',
      '',
      'Ready To Eat'
    ),
    (
      'Operation Nightwatch',
      '8800 SE 80th Ave. Portland, OR 97206',
      'Main Line: 503-220-0439',
      'Southeast Hospitality Center: Meals, supplies, showers on Saturdays. They will issue a statement each Wednesday afternoon with updates on our plans for service during the next weekend. The weekly statement will be posted on our website, through our social media accounts, and directly through our E-Newsletter.',
      'Hours: 7-9 p.m. Fri., 5-8 p.m. Sat.',
      'Ready To Eat'
    ),
    (
      'Operation Nightwatch',
      '1432 SW 13th Ave. Portland, OR 97201',
      'Main Line: 503-220-0438',
      'Sandwiches and games. Drop-in.',
      'CLOSED',
      'Ready To Eat'
    ),
    (
      'Parkrose Community Kitchen',
      '12505 NE Halsey St. Portland, OR 97230',
      '',
      'Dinner every Tues. night from November through April.',
      'Hours: 6-7 p.m. Tues.',
      'Ready To Eat'
    ),
    (
      'Portland Rescue Mission, New Life Recovery',
      '111 W Burnside St. Portland, OR 97209',
      'Main Line: 503-906-7690',
      'Two daily meals, sermon not required.',
      'Hours: 7 a.m. Mon.-Sun. breakfast; 6 p.m. Mon.-Sun. dinner; 12:30 p.m. Sat.-Sun. lunch.',
      'Ready To Eat'
    ),
    (
      'Potluck In The Park',
      'NW Eighth and NW Glisan St Portland, OR 97209',
      'Main Line: 503-255-7611',
      'Hot meal on Sundays. Pet food also. Hours: Meal tickets given out at noon. Meal begins: 3 p.m. Website has latest details.',
      'Website has latest details.',
      'Ready To Eat'
    ),
    (
      'Rahabs Sisters',
      '247 SE 82nd Ave. Portland, OR 97215',
      '',
      'Friday night community for those who identify as women or whose gender identity makes them vulnerable. Meals and personal hygiene supplies.',
      'Coffee hours: 5-7 p.m. Fri. Dinner hours: 7-10 p.m.',
      'Ready To Eat'
    ),
    (
      'Rose Haven',
      '627 NW 18th Ave. Portland, OR 97209',
      '',
      'Nutritious meals provided to women and their children. At-the-door support: food, water, emergency clothing, diapers, wipes, hygiene products, mail service, pet food, outdoor supplies as they last until further notice.',
      'Hours: 8:30 a.m.-noon, 1-4 p.m. Mon.-Fri. 3 p.m. closure Wed.',
      'Ready To Eat'
    ),
    (
      'Salvation Army',
      '473 SE 194th Ave. Portland, OR 97233',
      'Main Line: 503-661-8972',
      'Free nightly meals for children 0-18 years. Only on school nights, based on Reynolds School District calendar.',
      'Hours: 5:30-6 p.m. Mon.-Fri.',
      'Ready To Eat'
    ),
    (
      'Salvation Army',
      '351 SE Oak St. Hillsboro, OR 97123',
      'Main Line: 503-640-4311',
      'Sack lunches.',
      'Hours: 9 a.m.-noon Mon., Tues., Thurs., Fri.',
      'Ready To Eat'
    ),
    (
      'Sandy Assembly of God',
      '39800 East Hwy 26 Sandy, OR 97055',
      'Main Line: 503-668-5589',
      'Hot meal on 3rd Monday of the Month & Food Boxes, as supplies last',
      'Hours: 6 p.m. 3rd Mon.',
      'Ready To Eat'
    ),
    (
      'Sisters Of The Road Cafe',
      '133 NW Sixth Ave. Portland, OR 97209',
      'Main Line: 503-222-5694',
      'Nonprofit cafe and community organizing space for radical human and economic rights. Meals served for $1.50 cash, Oregon Trail Card or barter work.',
      'Reserve a meal after 9:15 a.m. Cafe hours: 10 a.m.-2 p.m. Tues.-Sat.',
      'Ready To Eat'
    ),
    (
      'St. Andre Bessette',
      '601 W Burnside St. Portland, OR 97209',
      'Main Line: 503-228-0746',
      'Warm meals, hot beverages. Be in line by 9:30 a.m. Tues.-Thurs.',
      'Opens: 7 a.m. (no more entries after 8 p.m.) Fri.',
      'Ready To Eat'
    ),
    (
      'St. Francis Dining Hall',
      '320 SE 11th Ave. (Lower Level) Portland, OR 97214',
      'Main Line: 503-234-2028',
      'Dinner served 5 p.m. Mon.-Thurs. Lunch served 12:30 p.m. Fridays only. Supper served 2 p.m. Sun. Sunday hours: 11:30 a.m.-4 p.m.',
      'Dinner served 5 p.m. Mon.-Thurs. Lunch served 12:30 p.m. Fridays only. Supper served 2 p.m. Sun. Sunday hours: 11:30 a.m.-4 p.m.',
      'Ready To Eat'
    ),
    (
      'St. Francis Food Pantry - Hope Diner/Shelter',
      '15659 SW Oregon St. Sherwood, OR 97140',
      'Main Line: 503-625-7067',
      'Warm meal for Sherwood, Tigard, Tualatin residents.',
      'Free hot meal hours: 5-6 p.m. Sun.',
      'Ready To Eat'
    ),
    (
      'St. Johns Episcopal Church',
      '2036 SE Jefferson St. Milwaukie, OR 97222',
      'Main Line: 503-653-5880',
      'Meal service ministry.',
      'Hours: 2:15 p.m. Sun.',
      'Ready To Eat'
    ),
    (
      'St. Michael & All Angels Church',
      '1704 NE 43rd Ave. Portland, OR 97213',
      'Main Line: 503-284-7141',
      'Spaghetti lunch hours: 11:30 a.m.-12:30 p.m. last Sat. Mixed menu hours: 11:30 a.m.-12:30 p.m. 2nd Sat.',
      'Spaghetti lunch hours: 11:30 a.m.-12:30 p.m. last Sat. Mixed menu hours: 11:30 a.m.-12:30 p.m. 2nd Sat.',
      'Ready To Eat'
    ),
    (
      'St. Philip the Deacon Episcopal',
      '120 NE Knott St. Portland, OR 97212',
      'Main Line: 503-281-5802',
      'Meal hours: 11 a.m.-1 p.m. Sat. (Closed 5th Sat.)',
      'Meal hours: 11 a.m.-1 p.m. Sat. (Closed 5th Sat.)',
      'Ready To Eat'
    ),
    (
      'St. Stephens Episcopal Church',
      '1432 SW 13th Ave. Portland, OR 97201',
      'Main Line: 503-223-6424',
      'Soup and sandwich hours: 10:30-11:30 a.m. Mon., Fri. 11:45 a.m.-12:30 p.m. Tues. Hot breakfast hours: 7:30-10 a.m. Sat.',
      'Soup and sandwich hours: 10:30-11:30 a.m. Mon., Fri. 11:45 a.m.-12:30 p.m. Tues. Hot breakfast hours: 7:30-10 a.m. Sat.',
      'Ready To Eat'
    ),
    (
      'St. Vincent de Paul Clackamas Co.',
      '297 NW Broadway St. Estacada, OR 97023',
      'Main Line: 503-630-2416',
      'Free lunches.',
      'Hours: 11 a.m.-1 p.m. First and third Thurs.',
      'Ready To Eat'
    ),
    (
      'The Canby Center',
      '681 SW Second Ave. Canby, OR',
      'Main Line: 503-266-2920',
      'Free hot lunch.',
      'Hours: 11 a.m.-1 p.m. Mon.-Thurs.',
      'Ready To Eat'
    ),
    (
      'Trinity Episcopal Cathedral',
      '147 NW 19th Ave. Portland, OR 97209',
      'Main Line: 503-478-1210',
      'Hot community meal hours: 11 a.m.-1 p.m. Wed.',
      'Hot community meal hours: 11 a.m.-1 p.m. Wed.',
      'Ready To Eat'
    ),
    (
      'Union Gospel Mission',
      '3 NW Third Ave. Portland, OR 97209',
      'Main Line: 503-274-4483',
      'Sack lunches: 7 a.m. Mon., Tues., Thurs. Clothing (upon availability) hours: 4-5 p.m. Tues.- Fri. Hot lunch, snacks, other services hours: 10-11:30 a.m. Tues.-Thurs., 10-11:15 a.m. Fri., 2-3:45 p.m. Tues.-Sat. Chapel and hot dinner hours: 7:10-8:30 p.m. Tues.-Fri. Breakfast hours: 6:30 a.m. Wed., Fri. Snacks and services hours: 2-4 p.m. Sat. Thanksgiving day dinner: 10 a.m.-1 p.m.',
      'Sack lunches: 7 a.m. Mon., Tues., Thurs. Clothing (upon availability) hours: 4-5 p.m. Tues.- Fri. Hot lunch, snacks, other services hours: 10-11:30 a.m. Tues.-Thurs., 10-11:15 a.m. Fri., 2-3:45 p.m. Tues.-Sat. Chapel and hot dinner hours: 7:10-8:30 p.m. Tues.-Fri. Breakfast hours: 6:30 a.m. Wed., Fri. Snacks and services hours: 2-4 p.m. Sat. Thanksgiving day dinner: 10 a.m.-1 p.m.',
      'Ready To Eat'
    ),
    (
      'Women of Wisdom',
      '12550 SW Second St. Beaverton, OR 97005',
      'Main Line: 503-846-3555',
      'Provides monthly healthy food benefits, growth monitoring and referral to other programs for pregnant and post-partum women, infants and children up to age 5.',
      'Phone hours: 8:30- 11:50 a.m., 1-6:30 p.m. Mon.; 8:30-11:50 a.m., 1-4:30 p.m. Tues.-Thurs.',
      'Ready To Eat'
    ),
    (
      'Women of Wisdom',
      '7360 SW Hunziker St. Tigard, OR 97223',
      'Main Line: 503-846-3555',
      'Provides monthly healthy food benefits, growth monitoring and referral to other programs for pregnant and post-partum women, infants and children up to age 5.',
      'Phone hours: 8:30- 11:50 a.m., 1-6:30 p.m. Mon.; 8:30-11:50 a.m., 1-4:30 p.m. Tues.-Thurs.',
      'Ready To Eat'
    ),
    (
      'Women of Wisdom',
      '254 N First Ave Hillsboro, OR 97124',
      'Main Line: 503-846-3555',
      'Provides monthly healthy food benefits, growth monitoring and referral to other programs for pregnant and post-partum women, infants and children up to age 5.',
      'Phone hours: 8:30- 11:50 a.m., 1-6:30 p.m. Mon.; 8:30-11:50 a.m., 1-4:30 p.m. Tues.-Thurs.',
      'Ready To Eat'
    ),
    (
      'Zarephath Ministries',
      '59 NW Ava Ave. (enter through parking lot door) Gresham, OR 97030',
      'Main Line: 503-667-2692',
      'CLOSED',
      'CLOSED',
      'Ready To Eat'
    ),
    (
      'Zarephath Pantry',
      '190 SW Third Ave. Canby, OR 97013',
      'Contact: 503-266-4061',
      'Meals. Pick up boxed meals 5-6:30 p.m. Tues.',
      'Hours: 5-6:30 p.m. Tues.',
      'Ready To Eat'
    )