from annie_may_rice.settings import AWS_BUCKET_URL


def get_s3_url(file_name):
    return AWS_BUCKET_URL + file_name
