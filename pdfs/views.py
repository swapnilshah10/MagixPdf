from django.http import HttpResponse
from .models import *
from rest_framework.status import (
    HTTP_400_BAD_REQUEST,
    HTTP_404_NOT_FOUND,
    HTTP_200_OK
)
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
import PyPDF2
import time
from PyPDF2 import PdfReader, PdfWriter
import requests
import os
from django.http import FileResponse
from PyPDF2 import PdfReader
import json

def uploadd(p):
    dfile = open(p, "rb")
    url = "http://127.0.0.1:8000/file/upload/"
    test_res = requests.post(url, files={"file": dfile})
    dfile.close()
    os.remove(p)
    return (test_res.text)


def pdfreducer(pdf):
    for i in pdf:
        reader = PdfReader(i)
        writer = PdfWriter()
        for page in reader.pages:
            writer.add_page(page)
        writer.add_metadata(reader.metadata)
        c = str(int(time.time()))
        p = "media/temp/" + c + '.pdf'
        with open(p, "wb") as fp:
            writer.write(fp)
        return p


def pdfmerger(pdfs):
    merger = PyPDF2.PdfFileMerger()
    for pdf in pdfs:
        merger.append(pdf)
    c = str(int(time.time()))
    p = "media/temp/" + c + '.pdf'
    merger.write(p)
    merger.close()
    return p


@api_view(['POST'])
def text_extractor(pdfs):
    text = ""
    for pdf in pdfs:
        pdfReader = PyPDF2.PdfFileReader(pdf)
        for i in range(pdfReader.numPages):
            pageObj = pdfReader.getPage(i)
            text += pageObj.extractText()
    f = open("media/temp/text.txt", "w+")
    f.write(text)
    f.close()
    return "media/temp/text.txt"


@api_view(['POST'])
def image_extractor(request):
    if request.method == 'POST':
        file = (request.FILES)
        pdfs = file.values()
        try:
            for pdf in pdfs:
                reader = PdfReader(pdf)
                imgs = []
                count = 0
                for page in reader.pages:
                    for image_file_object in page.images:
                        with open("media/temp/"+pdf.name+str(count+1)+'.jpg', "wb") as fp:
                            print(pdf.name)
                            imgs.append("http://127.0.0.1:8000/media/temp/"+str(count+1)+image_file_object.name)
                            fp.write(image_file_object.data)
                            count += 1
                d = {}
                for i in range(len(imgs)):
                    d[i] = imgs[i]
                json_object = json.dumps(d, indent = 4) 
                return Response(json_object, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(str(e) + "Error while reading pdf", status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def merge_file(request):
    if request.method == 'POST':
        file = (request.FILES)
        p = pdfmerger(file.values())
        # for i in file.values():
        #     pdf = Pdfs.objects.create(Pdfs=i)
        return Response("http://127.0.0.1:8000/"+p, status=status.HTTP_200_OK)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def reduce_file(request):
    if request.method == 'POST':
        file = []
        file = (request.FILES)
        p = pdfreducer(file.values())
        return Response("http://127.0.0.1:8000/"+p, status=status.HTTP_200_OK)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def upload_file(request):
    if request.method == 'POST':
        file = []
        file = (request.FILES['file'])
        pdf = Pdfs.objects.create(Pdfs=file)
        # print(pdf.Pdfs)
        return Response("http://127.0.0.1:8000/media/"+str(pdf.Pdfs), status=status.HTTP_200_OK)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def read_file(request):
    if request.method == 'POST':
        file = []
        file = (request.FILES)
        try:
            p = text_extractor(file.values())
            file_handle = open(p, "rb")
            response = FileResponse(file_handle, content_type='text/plain')
            response['Content-Length'] = os.path.getsize(p)
            response['Content-Disposition'] = 'attachment; filename="%s"' % p
            # return response
            return Response("http://127.0.0.1:8000/"+str(p), status=status.HTTP_200_OK)
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        # return Response( p ,status=status.HTTP_200_OK)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)
