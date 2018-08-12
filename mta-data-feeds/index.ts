

// quer

`http://datamine.mta.info/mta_esi.php?key=<key>&feed_id=1`

const apiKey = process.env.MTA_API_KEY;

async getFeedData(feedId) {
    const params = {
        feed_id: feedId,
        key: apiKey
    }
    const url = 'http://datamine.mta.info/mta_esi.php'
}