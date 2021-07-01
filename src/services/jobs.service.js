import axios from 'axios'
// Create instance called instance
const instance = axios.create({
    baseURL: 'https://www.zippia.com/api',
    headers: {
        'Content-Type': 'application/json'
    },
});
const jobsService = {
    getJobs: () =>
        instance({
            'method': 'POST',
            'url': '/jobs',
            'data': {
                "companySkills": true,
                "dismissedListingHashes": [],
                "fetchJobDesc": true,
                "jobTitle": "Business Analyst",
                "locations": [],
                "numJobs": 20,
                "previousListingHashes": []
            }
        })
}
export default jobsService;