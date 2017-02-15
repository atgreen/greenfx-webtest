This directory contains a Jenkinsfile which can be used to build
greenfx-webtest using an OpenShift build pipeline.

To do this, run:

```bash
# create the nodejs example as usual
oc new-app https://github.com/openshift/greenfx-webtest

# now create the pipeline build controller from the openshift/pipeline
# subdirectory
oc new-app https://github.com/openshift/greenfx-webtest \
  --context-dir=openshift/pipeline --name greenfx-webtest-pipeline
```
