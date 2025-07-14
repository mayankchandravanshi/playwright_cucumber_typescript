module.exports = {
    default: {
        paths: [
            "tests/features"
        ], 
        dryRun: false,
        format: [
            "progress-bar",
            "summary",
            "json:reports/cucumber-report.json",
            "html:reports/cucumber-report.html",
            "rerun:@rerun.txt"
        ],
        formatOptions: {
            colorsEnabled: true,
            snippetInterface: "async-await"
        },
        require: [
            "tests/step-defs/*.ts"
        ],
        requireModule: [
            "ts-node/register"
        ],
        "parallel":2
    },
    "rerun": {
        "formatOptions": {
            "snippetInterface": "async-await"
        },
        "dryRun": false,
        "format": [
            "progress-bar",
            "html:test-results/cucumber-report.html",
            "json:test-results/cucumber-report.json"
        ]
  }
}