djs = {

  /**
   * Display the verse/passage of the day (callback for Bible Gateway API call)
   * @param {{votd: {text: string, permalink: string, display_ref: string, copyrightlink: string}}} res The callback response
   */
  displayVotd (res) {
    const votd = res.votd
    const votdItem = document.querySelector('.votd-item')
    votdItem.querySelector('.verse').innerHTML = votd.text
    const reference = votdItem.querySelector('.votd-reference')
    reference.href = votd.permalink.replace('&amp;', '&')
    const ref = votd.display_ref
    const isPassage = ref.indexOf(',') >= 0 || ref.indexOf('-') >= 0 || ref.indexOf(';') >= 0
    if (isPassage) {
      document.querySelector('.votd-heading').innerText = 'Passage of the Day'
    }
    reference.innerHTML = ref
    votdItem.querySelector('.version-link').href = votd.copyrightlink.replace('&amp;', '&').replace('&amp;', '&')
    votdItem.style.display = 'block'
  }
}
