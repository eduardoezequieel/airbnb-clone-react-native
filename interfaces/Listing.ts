export interface Listing {
  id: string;
  listing_url: string;
  scrape_id: string;
  last_scraped: string;
  name: string;
  summary: null | string;
  space: null | string;
  description: string;
  experiences_offered: ExperiencesOffered;
  neighborhood_overview: null | string;
  notes: null | string;
  transit: null | string;
  access: null | string;
  interaction: null | string;
  house_rules: null | string;
  thumbnail_url: null | string;
  medium_url: null | string;
  picture_url: PictureURL | null;
  xl_picture_url: null | string;
  host_id: string;
  host_url: string;
  host_name: string;
  host_since: string;
  host_location: null | string;
  host_about: null | string;
  host_response_time: HostResponseTime;
  host_response_rate: number;
  host_acceptance_rate: null;
  host_thumbnail_url: string;
  host_picture_url: string;
  host_neighbourhood: null | string;
  host_listings_count: number;
  host_total_listings_count: number;
  host_verifications: HostVerification[];
  street: string;
  neighbourhood: null | string;
  neighbourhood_cleansed: string;
  neighbourhood_group_cleansed: NeighbourhoodGroupCleansed;
  city: City;
  state: City | null;
  zipcode: null | string;
  market: City | null;
  smart_location: SmartLocation;
  country_code: CountryCode;
  country: Country;
  latitude: string;
  longitude: string;
  property_type: PropertyType;
  room_type: RoomType;
  accommodates: number;
  bathrooms: number | null;
  bedrooms: number | null;
  beds: number;
  bed_type: BedType;
  amenities: Amenity[];
  square_feet: number | null;
  price: number;
  weekly_price: number | null;
  monthly_price: number | null;
  security_deposit: number | null;
  cleaning_fee: number | null;
  guests_included: number;
  extra_people: number;
  minimum_nights: number;
  maximum_nights: number;
  calendar_updated: CalendarUpdated;
  has_availability: null;
  availability_30: number;
  availability_60: number;
  availability_90: number;
  availability_365: number;
  calendar_last_scraped: string;
  number_of_reviews: number;
  first_review: null | string;
  last_review: null | string;
  review_scores_rating: number | null;
  review_scores_accuracy: number | null;
  review_scores_cleanliness: number | null;
  review_scores_checkin: number | null;
  review_scores_communication: number | null;
  review_scores_location: number | null;
  review_scores_value: number | null;
  license: null;
  jurisdiction_names: null;
  cancellation_policy: CancellationPolicy;
  calculated_host_listings_count: number;
  reviews_per_month: number | null;
  geolocation: Geolocation;
  features: Feature[];
}

export enum Amenity {
  AccessibleHeightBed = 'Accessible-height bed',
  AirConditioning = 'Air conditioning',
  BBQGrill = 'BBQ grill',
  BabyBath = 'Baby bath',
  BabyMonitor = 'Baby monitor',
  BabysitterRecommendations = 'Babysitter recommendations',
  Bathtub = 'Bathtub',
  BedLinens = 'Bed linens',
  Breakfast = 'Breakfast',
  BuzzerWirelessIntercom = 'Buzzer/wireless intercom',
  CableTV = 'Cable TV',
  CarbonMonoxideDetector = 'Carbon monoxide detector',
  CatS = 'Cat(s)',
  ChangingTable = 'Changing table',
  ChildrenSBooksAndToys = 'Children’s books and toys',
  ChildrenSDinnerware = 'Children’s dinnerware',
  CoffeeMaker = 'Coffee maker',
  CookingBasics = 'Cooking basics',
  Crib = 'Crib',
  DisabledParkingSpot = 'Disabled parking spot',
  DishesAndSilverware = 'Dishes and silverware',
  Dishwasher = 'Dishwasher',
  DogS = 'Dog(s)',
  Doorman = 'Doorman',
  DoormanEntry = 'Doorman Entry',
  Dryer = 'Dryer',
  ElevatorInBuilding = 'Elevator in building',
  Essentials = 'Essentials',
  ExtraPillowsAndBlankets = 'Extra pillows and blankets',
  FamilyKidFriendly = 'Family/kid friendly',
  FireExtinguisher = 'Fire extinguisher',
  FireplaceGuards = 'Fireplace guards',
  FirmMatress = 'Firm matress',
  FirstAidKit = 'First aid kit',
  FlatSmoothPathwayToFrontDoor = 'Flat smooth pathway to front door',
  FreeParkingOnPremises = 'Free parking on premises',
  FreeParkingOnStreet = 'Free parking on street',
  GameConsole = 'Game console',
  GardenOrBackyard = 'Garden or backyard',
  Gym = 'Gym',
  HairDryer = 'Hair dryer',
  Hangers = 'Hangers',
  Heating = 'Heating',
  HighChair = 'High chair',
  HotTub = 'Hot tub',
  HotWater = 'Hot water',
  IndoorFireplace = 'Indoor fireplace',
  Internet = 'Internet',
  Iron = 'Iron',
  Keypad = 'Keypad',
  Kitchen = 'Kitchen',
  LaptopFriendlyWorkspace = 'Laptop friendly workspace',
  LockOnBedroomDoor = 'Lock on bedroom door',
  Lockbox = 'Lockbox',
  LongTermStaysAllowed = 'Long term stays allowed',
  LuggageDropoffAllowed = 'Luggage dropoff allowed',
  Microwave = 'Microwave',
  OtherPetS = 'Other pet(s)',
  OutletCovers = 'Outlet covers',
  Oven = 'Oven',
  PackNPlayTravelCrib = 'Pack ’n Play/travel crib',
  PathToEntranceLitAtNight = 'Path to entrance lit at night',
  PatioOrBalcony = 'Patio or balcony',
  PetsAllowed = 'Pets allowed',
  PetsLiveOnThisProperty = 'Pets live on this property',
  Pool = 'Pool',
  PrivateEntrance = 'Private entrance',
  PrivateLivingRoom = 'Private living room',
  Refrigerator = 'Refrigerator',
  RoomDarkeningShades = 'Room-darkening shades',
  SafetyCard = 'Safety card',
  SelfCheckIn = 'Self Check-In',
  Shampoo = 'Shampoo',
  SingleLevelHome = 'Single level home',
  Smartlock = 'Smartlock',
  SmokeDetector = 'Smoke detector',
  SmokingAllowed = 'Smoking allowed',
  StairGates = 'Stair gates',
  StepFreeAccess = 'Step-free access',
  Stove = 'Stove',
  SuitableForEvents = 'Suitable for events',
  TableCornerGuards = 'Table corner guards',
  The24HourCheckIn = '24-hour check-in',
  TranslationMissingEnHostingAmenity49 = 'translation missing: en.hosting_amenity_49',
  TranslationMissingEnHostingAmenity50 = 'translation missing: en.hosting_amenity_50',
  Tv = 'TV',
  Washer = 'Washer',
  WheelchairAccessible = 'Wheelchair accessible',
  WideClearanceToBed = 'Wide clearance to bed',
  WideClearanceToShowerAndToilet = 'Wide clearance to shower and toilet',
  WideDoorway = 'Wide doorway',
  WideHallwayClearance = 'Wide hallway clearance',
  WindowGuards = 'Window guards',
  WirelessInternet = 'Wireless Internet',
}

export enum BedType {
  Couch = 'Couch',
  Futon = 'Futon',
  PullOutSofa = 'Pull-out Sofa',
  RealBed = 'Real Bed',
}

export enum CalendarUpdated {
  AWeekAgo = 'a week ago',
  The1WeekAgo = '1 week ago',
  The22MonthsAgo = '22 months ago',
  The2DaysAgo = '2 days ago',
  The2MonthsAgo = '2 months ago',
  The2WeeksAgo = '2 weeks ago',
  The3DaysAgo = '3 days ago',
  The3MonthsAgo = '3 months ago',
  The3WeeksAgo = '3 weeks ago',
  The4DaysAgo = '4 days ago',
  The4MonthsAgo = '4 months ago',
  The4WeeksAgo = '4 weeks ago',
  The5DaysAgo = '5 days ago',
  The5MonthsAgo = '5 months ago',
  The5WeeksAgo = '5 weeks ago',
  The6DaysAgo = '6 days ago',
  The6WeeksAgo = '6 weeks ago',
  The7MonthsAgo = '7 months ago',
  The7WeeksAgo = '7 weeks ago',
  The9MonthsAgo = '9 months ago',
  Today = 'today',
  Yesterday = 'yesterday',
}

export enum CancellationPolicy {
  Flexible = 'flexible',
  Moderate = 'moderate',
  Strict = 'strict',
  SuperStrict60 = 'super_strict_60',
}

export enum City {
  Berlin = 'Berlin',
  Wannsee = 'Wannsee',
}

export enum Country {
  Germany = 'Germany',
}

export enum CountryCode {
  De = 'DE',
}

export enum ExperiencesOffered {
  None = 'none',
}

export enum Feature {
  HostHasProfilePic = 'Host Has Profile Pic',
  HostIdentityVerified = 'Host Identity Verified',
  HostIsSuperhost = 'Host Is Superhost',
  InstantBookable = 'Instant Bookable',
  IsLocationExact = 'Is Location Exact',
  RequireGuestPhoneVerification = 'Require Guest Phone Verification',
  RequireGuestProfilePicture = 'Require Guest Profile Picture',
}

export interface Geolocation {
  lon: number;
  lat: number;
}

export enum HostResponseTime {
  WithinAnHour = 'within an hour',
}

export enum HostVerification {
  Amex = 'amex',
  Email = 'email',
  Facebook = 'facebook',
  Google = 'google',
  GovernmentID = 'government_id',
  IdentityManual = 'identity_manual',
  Jumio = 'jumio',
  Kba = 'kba',
  Linkedin = 'linkedin',
  ManualOffline = 'manual_offline',
  ManualOnline = 'manual_online',
  OfflineGovernmentID = 'offline_government_id',
  Phone = 'phone',
  Reviews = 'reviews',
  Selfie = 'selfie',
  WorkEmail = 'work_email',
}

export enum NeighbourhoodGroupCleansed {
  CharlottenburgWilm = 'Charlottenburg-Wilm.',
  FriedrichshainKreuzberg = 'Friedrichshain-Kreuzberg',
  Lichtenberg = 'Lichtenberg',
  MarzahnHellersdorf = 'Marzahn - Hellersdorf',
  Mitte = 'Mitte',
  Neukölln = 'Neukölln',
  Pankow = 'Pankow',
  Reinickendorf = 'Reinickendorf',
  Spandau = 'Spandau',
  SteglitzZehlendorf = 'Steglitz - Zehlendorf',
  TempelhofSchöneberg = 'Tempelhof - Schöneberg',
  TreptowKöpenick = 'Treptow - Köpenick',
}

export interface PictureURL {
  thumbnail: boolean;
  filename: string;
  format: Format;
  width: number;
  mimetype: Mimetype;
  etag: string;
  id: string;
  last_synchronized: string;
  color_summary: string[];
  height: number;
}

export enum Format {
  JPEG = 'JPEG',
}

export enum Mimetype {
  ImageJPEG = 'image/jpeg',
}

export enum PropertyType {
  Apartment = 'Apartment',
  BedBreakfast = 'Bed & Breakfast',
  Bungalow = 'Bungalow',
  Cabin = 'Cabin',
  Condominium = 'Condominium',
  House = 'House',
  Loft = 'Loft',
  Other = 'Other',
  ServicedApartment = 'Serviced apartment',
  Townhouse = 'Townhouse',
  VacationHome = 'Vacation home',
}

export enum RoomType {
  EntireHomeApt = 'Entire home/apt',
  PrivateRoom = 'Private room',
  SharedRoom = 'Shared room',
}

export enum SmartLocation {
  BerlinGermany = 'Berlin, Germany',
  SmartLocationBerlinGermany = 'Berlin , Germany',
}
