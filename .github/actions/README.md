# Applitools batch complete notification

A custom action, which notifies Applitools test manager about completion of a batch test execution.

## Using These Actions

This action exists natively inside the demo repository. Therefore this can be used only from within the repository. However, the contents of the respository `.github/actions/` does constitute an independent github action and can be ported to an independent respository. The contents are curated to be suitable for use in github marketplace.

## Inputs

The table below lists the inputs to the custom action:

Name | Description | Required/Default
-----|-------------|----------------------------
batch-id | An unique identifier for a build | **Required**
api-key | Applitools API key required for authentication | **Required**
applitools-server-url | Base URL of the applitools server | **Required**
github server | Hostname of the github server | github.com

## Outputs

Name | Description
-----|--------------------------------
response | HTTP response code of the notification request

## Workflow example

In order to use this custom action within a workflow certain precautions are necessary. The following workflow example describes the necessary steps to use this custom action:

```bash
steps:
  - uses: ./.github/actions/
    id: notify
    with:
      batch-id: ${{ env.APPLITOOLS_BATCH_ID }}
      api-key: ${{ env.APPLITOOLS_API_KEY }}
      applitools-server-url: ${{ env.APPLITOOLS_SERVER_URL }}
  # Display the output of the previous step
  - run: echo "The HTTP response code = ${{ steps.notify.outputs.response }}"
```

## Authors

**Quality Engineering Infrastructure** <QE-Infrastructure@gannett.com>
