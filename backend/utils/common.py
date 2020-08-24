from annie_may_rice.settings import AWS_BUCKET_URL
from botocore.client import Config
import boto3


def get_s3_url(file_name):
    return AWS_BUCKET_URL + file_name


def get_presigned_url(bucket_name, key):
    s3 = boto3.client('s3', config=Config(
        signature_version='s3v4'), region_name='eu-west-1')
    return s3.generate_presigned_url('get_object', Params={'Bucket': bucket_name, 'Key': key})
