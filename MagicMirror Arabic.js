/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 12,
	displaySeconds: true,
	digitFade: false,
	units: "metric",

	modules: [
		{
		module: "clock",
		position: "top_left",	// This can be any of the regions.
		config: {
			// The config property is optional.
			// See 'Configuration options' for more information.
		}
		},
		{
		module: 'MMM-RandomQuranAyah',
		position: 'bottom_bar',	// This can be any of the regions. Best result is in the top_bar/bottom_bar as ayah (verse) can take multiple lines.
		config: {
			apiVersion: '1.0', // please, leave unchanged. reserved for future use.
			showArabic: true,
			showTranslation: false,
			surahArabicName:true,
			translationLang:'en.asad',
			updateInterval: 3600 * 1000, // milliseconds
			}
		},
		{
		module: 'MMM-PrayerTime',
		position: 'top_left',
		config: {
			apiVersion: '1.0',
			lat: '21.485811',
			lon: '39.192505',
			timezone: 'Asia/Riyadh',
                        timeFormat: 12,
			method: 4,
			playAdzan: ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'],
			notDisplayed: ['midnight', 'sunset'],
			useUpdateInterval: true,
			updateInterval: 86400 * 1000,
			animationSpeed: 2.5 * 1000,
			language: 'ar',
			showAdzanAlert: true,
			alertTimer: 15000
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				
				location: "Jeddah",
				locationID: "105343",  //ID from http://bulk.openweathermap.org/sample/; unzip the gz file and find your city
				appid: "b9222240f30cb33e5ffe6f1f11efc170"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				
				location: "Jeddah",
				locationID: "105343",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "b9222240f30cb33e5ffe6f1f11efc170"
			}
		},
		
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
