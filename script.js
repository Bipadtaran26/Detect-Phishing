document.getElementById('verifyForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const urlInput = document.getElementById('urlInput').value;
    const btn = document.getElementById('verifyBtn');
    const resultArea = document.getElementById('resultMessage');

    // UI Feedback: Disable button and show loading state
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Scanning...';
    btn.style.opacity = '0.7';
    resultArea.innerHTML = "";

    // Simulate an API call delay
    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-search"></i> Verify Link';
        btn.style.opacity = '1';

        // Simple logic for demonstration
        if (urlInput.includes("secure") || urlInput.includes("bank")) {
            resultArea.innerHTML = "⚠️ WARNING: This link matches known phishing patterns.";
            resultArea.style.color = "#ff4d4d";
        } else {
            resultArea.innerHTML = "✅ SUCCESS: No immediate threats detected for this URL.";
            resultArea.style.color = "#57b87c";
        }
    }, 2000);
});