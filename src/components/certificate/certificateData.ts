import {postman,sl_1,sl_2,st_1,st_2, google_cybersecurity ,google_1,google_2,google_3,google_4,google_5,google_6,google_7,google_8,ibm_1,ibm_2,ibm_3, microsoft_1, microsoft_2, codechef_1, codechef_2, CS50, javageek, gitgeek, gl_1, gl_2, gl_3, gl_4, hr_1, hr_2, lu_1, lu_3, lu_2 } from "../../assets";


// certificateData.ts
interface Certificate {
	title: string;
	imageUrl: string;
}

interface Organization {
	name: string;
	certificates: Certificate[];
}

const certificateData: Organization[] = [
	{
		name: 'Google',
		certificates: [

			{ title: 'Google Cybersecurity', imageUrl: google_cybersecurity },

			{ title: 'Google - Play It Safe', imageUrl: google_1 },
			{ title: 'Google - Foundation of Cybersecurity', imageUrl: google_2 },
			{ title: 'Google - Connect & Protect', imageUrl: google_3 },
			{ title: 'Google - Linux & SQL', imageUrl: google_4 },
			{ title: 'Google - Assets,Threats& Vulnerabilities', imageUrl: google_5 },
			{ title: 'Google - Detection & Response', imageUrl: google_6 },
			{ title: 'Google - Cybersecurity with Python', imageUrl: google_7 },
			{ title: 'Google - Put It work', imageUrl: google_8 },

		],
	},

	{
		name: 'Microsoft',
		certificates: [
			{ title: 'Microsoft azure Fundamental', imageUrl: microsoft_1 },
			{ title: 'Microsoft generative AI', imageUrl: microsoft_2 },
		],
	},

	{
		name: 'CodeChef',
		certificates: [
			{ title: 'Learn SQl', imageUrl: codechef_1 },
			{ title: 'Learn C++', imageUrl: codechef_2 },
		],
	},

	{
		name: 'CS50',
		certificates: [
			{ title: 'CS50x - Harvard University', imageUrl: CS50 },
		],
	},

	{
		name: 'HackerRank',
		certificates: [
			{ title: 'Go(Basic)', imageUrl: hr_1 },
			{ title: 'SQL(Basic)', imageUrl: hr_2},
		],
	},

	{
		name: 'Geekster',
		certificates: [
			{ title: 'Java Fundamentals', imageUrl: javageek },
			{ title: 'Git & Github Mastery', imageUrl: gitgeek },
		],
	},

	{
		name: 'Great Learning',
		certificates: [
			{ title: 'Agile for beginners', imageUrl: gl_1 },
			{ title: 'Front-end development CSS', imageUrl: gl_2 },
			{ title: 'Front-End development HTML', imageUrl: gl_3 },
			{ title: 'Linux Tutorial', imageUrl: gl_4 },
		],
	},

	{
		name: 'IBM',
		certificates: [
			{ title: 'Data visualizationwith with python', imageUrl: ibm_1 },
			{ title: 'Data analysis with python', imageUrl: ibm_2 },
			{ title: 'Hadoop 101', imageUrl: ibm_3 },
		],
	},

	{
		name: 'Postman',
		certificates: [
			{ title: 'Postman API Fundamental Student Expert ', imageUrl: postman },
		],
	},

	{
		name: 'Simpli Learn',
		certificates: [
			{ title: 'basic linux introduction course', imageUrl: sl_1 },
			{ title: 'introduction to SQL ', imageUrl: sl_2},
		],
	},

	{
		name: 'Scaler Topics',
		certificates: [
			{ title: 'Data Structures in C++', imageUrl: st_1 },
			{ title: 'Data Science Course ', imageUrl: st_2},
		],
	},

	{
		name: 'Let\'s Upgrade',
		certificates: [
			{ title: 'C++ programming', imageUrl: lu_1 },
			{ title: 'HTML & CSS', imageUrl: lu_2},
			{ title: 'Python & data science', imageUrl: lu_3},
		],
	},
];

export default certificateData;
