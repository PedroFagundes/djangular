from contact.models import Contact
from contact.serializers import ContactSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class ContactList(APIView):
	"""
	List all contacts, or create a new contact.
	"""
	def get_object(self, pk):
		try:
			return Contact.objects.get(pk=pk)
		except Contact.DoesNotExist:
			raise Http404

	def get(self, request, format=None):
		contacts = Contact.objects.all()
		serializer = ContactSerializer(contacts, many=True)
		return Response(serializer.data)

	def post(self, request, format=None):
		serializer = ContactSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)

		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

	def delete(self, request, format=None):
		contact = self.get_object(request.data['id'])
		contact.delete()
		return Response(status=status.HTTP_204_NO_CONTENT)
