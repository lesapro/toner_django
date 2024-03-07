from django import forms
from db.models import SubCategory

class SubCategoryForm(forms.ModelForm):
    class Meta:
        model = SubCategory
        fields = ['id','title','category', 'description']
        id = forms.IntegerField(widget=forms.HiddenInput)
        widgets = {
            'title': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Enter title', 'required': 'true'}),
            'category': forms.Select(attrs={'class': 'form-control', 'id': 'categorySelect'}),
            'description': forms.Textarea(
                attrs={'class': 'form-control', 'rows': '3', 'placeholder': 'Description', 'required': 'true'}),
        }