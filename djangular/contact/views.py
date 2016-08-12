from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from contact.models import Contact
from contact.serializers import ContactSerializer


class JSONResponse(HttpResponse):
    """
    An HttpResponse that renders its content into JSON.
    """
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)

@csrf_exempt
def contact_list(request):
	"""
	List all contacts.
	"""
	if request.method == 'GET':
		contacts = Contact.objects.all()
		serializer = ContactSerializer(contacts, many=True)
		return JSONResponse(serializer.data)