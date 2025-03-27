document.addEventListener('DOMContentLoaded', function() {
    const collegeSelect = document.getElementById('college');
    const otherCollegeGroup = document.getElementById('otherCollegeGroup');
    const otherCollegeName = document.getElementById('otherCollegeName');

    // College selection logic
    collegeSelect.addEventListener('change', function() {
        if (this.value === 'other') {
            otherCollegeGroup.style.display = 'block';
            otherCollegeName.required = true;
        } else {
            otherCollegeGroup.style.display = 'none';
            otherCollegeName.required = false;
        }
    });
});

